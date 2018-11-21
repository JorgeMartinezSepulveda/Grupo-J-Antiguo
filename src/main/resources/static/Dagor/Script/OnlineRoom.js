var DagorDagorath = DagorDagorath ||{};
var button;
var button2;
var button3;
var texto;
var texto2;
var texto3;
var texto4;
var texto5;
var texto6;
var texto7;
var seleccionado = false;
var id;
var caparBoton1 = false;
var caparBoton2 = false;
var numJugadores;
var oldlength=0;
var panel;
var titulo;
DagorDagorath.OnlineRoom = function(){};

DagorDagorath.OnlineRoom.prototype = {
	create: function() 
  	{
	  	//show the space tile, repeated
	    this.background = this.game.add.tileSprite(0, 0, 1000, 667, 'Fondo');

	    button = this.game.add.button(20, 20, 'BotonRetroceso', this.actionOnClick, this,1,0);
    	button.width = 85;
    	button.height = 60;
    	
    	panel = this.game.add.sprite(275, 580, 'Panel_Conectado');
    	panel.width = 450;
    	panel.height = 55;
    	panel.alpha = 0;
    	
    	titulo = this.game.add.sprite(352, 20, 'Titulo_Online');
    	//Titulo_Online

    	button2 = this.game.add.button(136.5, 220, 'BotonEnanoOnline', this.actionOnClick2, this,1,0);

    	button3 = this.game.add.button(636.5, 220, 'BotonTrasgoOnline', this.actionOnClick3, this,1,0);

    	texto = this.add.text(300, 595, '- Conectado al servidor, esperando jugador 2 -', { fontSize: '18px', fill: '#000000' });
    	texto.alpha = 0;
    	texto.stroke = '#EEE8AA';
    	texto.strokeThickness = 3;

    	texto2 = this.add.text(300, 595, '- Conectado al servidor, esperando jugador 2 -', { fontSize: '18px', fill: '#000000' });
    	texto2.alpha = 0;
    	texto2.stroke = '#EEE8AA';
    	texto2.strokeThickness = 3.5;
    	
    	texto7 = this.add.text(295, 595, '- Conexión establecida entre ambos jugadores -', { fontSize: '18px', fill: '#000000' });
    	texto7.alpha = 0;
    	texto7.stroke = '#EEE8AA';
    	texto7.strokeThickness = 3.5;
    	
    	texto3 = this.add.text(125, 540, ' Ya has seleccionado un bando ', { fontSize: '18px', fill: '#FE0000', backgroundColor: '#FDFDFD' });
    	texto3.alpha = 0;
    	
    	texto4 = this.add.text(595, 540, ' Ya has seleccionado un bando ', { fontSize: '18px', fill: '#FE0000', backgroundColor: '#FDFDFD' });
    	texto4.alpha = 0;

    	texto5 = this.add.text(390, 220, 'SELECCIONE UN BANDO', { fontSize: '18px', fill: '#000000'});
    	texto5.stroke = '#EEE8AA';
    	texto5.strokeThickness = 3.5;
    	
    	texto6 = this.add.text(400, 250, 'Numero de jugadores: 0', { fontSize: '18px', fill: '#000000'});
    	
	},
	
	update: function()
	{	
		$.ajax({
	        method: 'GET',
	        url: 'http://10.0.47.167:8090/jugadores/',
	        success: function(variab)
	        {
	        	numJugadores = variab.length;
	        	
	        	if(oldlength!==variab.length){
	        		caparBoton1=false;
	        		caparBoton2=false;
		        	for(var i = 0; variab.length > i; i++ )
		        	{
		        		if(variab[i] != undefined)
			        	{
		        			
			        		if(variab[i].personaje == 1)
			        		{
			        			caparBoton1 = true;
			        		} 
			        		else if(variab[i].personaje == 2)
			        		{
			        			caparBoton2 = true;
			        		}
			        		if(numJugadores > 0){
			        			texto6.setText('Numero de jugadores: ' + variab.length);
			        		}
				        	
			        	}
		        	}
		        	oldlength=variab.length;
		        	
		        	if ((numJugadores > 0)&&(seleccionado))
		        	{
		        		if (variab.length == 2)
			        	{
			        		texto.alpha = 0;
			        		texto2.alpha = 0;
			        		texto7.alpha = 1;
			        	} else if(variab.length == 1)
			        	{
			        		if(variab[0].personaje == 1)
			        		{
			        			texto.alpha = 1;
			        			texto7.alpha = 0;
			        		} 
			        		else if(variab[0].personaje == 2)
			        		{
			        			texto2.alpha = 1;
			        			texto7.alpha = 0;
			        		}
			        	}
		        	}
	        	}    	
	    	}
	    })
	},

	actionOnClick: function()
	{
		$.ajax({
	        method: 'DELETE',
	        url: 'http://10.0.47.167:8090/jugadores/' + id
	    })
	    //this.game.state.clearCurrentState('OnlineRoom');
	    seleccionado = false;
		numJugadores = 0;
		oldlength = 0;
	
		this.game.state.start('MainMenu');
	},

	actionOnClick2: function()
	{
		if(!caparBoton1)
		{
			if(seleccionado == false)
			{
				var name = prompt("Inserte su nombre", "Pepito");
				$.ajax({
			        method: "POST",
			        url: 'http://10.0.47.167:8090/jugadores',
			        data: JSON.stringify({"nombre": name, "conectado":true, "personaje": 1}),
			        processData: false,
			        headers: {
			            "Content-Type": "application/json"
			        },
			        success: function(){
			        	
			        	if(numJugadores == 1){
			        		texto.alpha = 1;
			        	} else if(numJugadores == 2){
			        		texto.alpha = 0;
			        		texto7.alpha = 1;
			        	}
		        		
		        		panel.alpha = 1;
		        		seleccionado = true;
		    		}
	    		}).done(function (id1) 
	    			{
	    	        	id = id1;
	    	        	$.ajax({
			        		method: "GET",
			        		url: 'http://10.0.47.167:8090/jugadores/' + id1
			        	})
	    			})
			}else{
				texto3.alpha = 1;
				this.game.time.events.add(Phaser.Timer.SECOND*2, function()
					      {
							texto3.alpha = 0;
					      }, this);
				
			}
		}
		
	},

	actionOnClick3: function()
	{
		if(!caparBoton2)
		{
			if(seleccionado == false)
			{
				var name = prompt("Inserte su nombre", "Pepito");
				$.ajax({
			        method: "POST",
			        url: 'http://10.0.47.167:8090/jugadores',
			        data: JSON.stringify({"nombre": name,"conectado":true, "personaje": 2}),
			        processData: false,
			        headers: {
			            "Content-Type": "application/json"
			        },
			        success: function(){
			        	
			        	if(numJugadores == 1){
			        		texto2.alpha = 1;
			        	} else if(numJugadores == 2){
			        		texto2.alpha = 0;
			        		texto7.alpha = 1;
			        	}
			        	
		        		panel.alpha = 1;
		        		seleccionado = true;
		    		}
	    		}).done(function (id2) 
	        		{
		        		id = id2;
		        		$.ajax({
			        		method: "GET",
			        		url: 'http://10.0.47.167:8090/jugadores/' + id2
			        	})
	        		})
			} else{
				texto4.alpha = 1;
				panel.alpha = 1;
				this.game.time.events.add(Phaser.Timer.SECOND*2, function()
					      {
							texto4.alpha = 0;
					      }, this);
				
			}
		}
	}
}