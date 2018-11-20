var DagorDagorath = DagorDagorath ||{};
var button;
var button2;
var button3;
var texto;
var texto2;
var seleccionado = false;
var id;
var caparBoton1 = false;
var caparBoton2 = false;
var numJugadores;
var oldlength=0;
DagorDagorath.OnlineRoom = function(){};

DagorDagorath.OnlineRoom.prototype = {
	create: function() 
  	{
	  	//show the space tile, repeated
	    this.background = this.game.add.tileSprite(0, 0, 1000, 667, 'Fondo');

	    button = this.game.add.button(20, 20, 'BotonRetroceso', this.actionOnClick, this,1,0);
    	button.width = 85;
    	button.height = 60;

    	button2 = this.game.add.button(80, 200, 'BotonEnanoOnline', this.actionOnClick2, this,1);
    	//button2.width = 85;
    	//button2.height = 60;

    	button3 = this.game.add.button(620, 90, 'BotonTrasgoOnline', this.actionOnClick3, this,1);

    	texto = this.add.text(380, 40, 'Conectado, bando de los valar', { fontSize: '18px', fill: '#000000' });
    	texto.alpha = 0;

    	texto2 = this.add.text(380, 40, 'Conectado, bando de morgoth', { fontSize: '18px', fill: '#000000' });
    	texto2.alpha = 0;

    	
	},
	
	update: function()
	{	
		$.ajax({
	        method: 'GET',
	        url: 'http://10.0.56.129:8090/jugadores/',
	        success: function(variab)
	        {
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
		        	}
	        		}
	        	oldlength=variab.length;
	        	}
	        	
	    	}
	    })
	},

	actionOnClick: function()
	{
		$.ajax({
	        method: 'DELETE',
	        url: 'http://10.0.56.129:8090/jugadores/' + id
	    })
	    //this.game.state.clearCurrentState('OnlineRoom');
	    seleccionado = false;
	
		this.game.state.start('MainMenu');
	},

	actionOnClick2: function()
	{
		if(!caparBoton1)
		{
			if(seleccionado == false){
			$.ajax({
		        method: "POST",
		        url: 'http://10.0.56.129:8090/jugadores',
		        data: JSON.stringify({"conectado":true, "personaje": 1}),
		        processData: false,
		        headers: {
		            "Content-Type": "application/json"
		        },
		        success: function(){
	        		texto.alpha = 1;
	        		seleccionado = true;
	    		}
    		}).done(function (id1) 
    			{
    	        	id = id1;
    			})
			}
		}
		
	},

	actionOnClick3: function()
	{
		if(!caparBoton2)
		{
			if(seleccionado == false){
			$.ajax({
		        method: "POST",
		        url: 'http://10.0.56.129:8090/jugadores',
		        data: JSON.stringify({"conectado":true, "personaje": 2}),
		        processData: false,
		        headers: {
		            "Content-Type": "application/json"
		        },
		        success: function(){
	        		texto2.alpha = 1;
	        		seleccionado = true;
	    		}
    		}).done(function (id2) 
        		{
	        		id = id2;
        		})
			}
		}
	}
}