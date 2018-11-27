var DagorDagorath = DagorDagorath || {};
var button;
var button2;
var button3;
var menu;
var music;
var sprite;
var letras_Musica;
var letras_Musica2;
var letras_Musica3;

var texto_aviso;
var texto_aviso1;
var texto_aviso2;
var texto_aviso3;
var texto_aviso4;

var serverDisconnected = false;
var aviso_Server;

//title screen
DagorDagorath.MainMenu = function(){};

DagorDagorath.MainMenu.prototype = {
	  create: function() 
	  {
		  	//show the space tile, repeated
		    this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
		
		    music=this.game.add.audio('Menu_Music',0.1, true);  //asjdaisjfbaisjgbaiosgj
		    music.play();
		    this.game.input.onDown.add(this.changeVolume, this);
		
		    //give it speed in x
		    this.background.autoScroll(-20, -20);
		
		    menu = this.game.add.sprite(283.3, 32.5, 'titulo');
		    menu.width = 433.4;
		    menu.height = 600;
		
		    letras_Musica = this.game.add.text(10, 605,'MUSIC',{font: "Bold 40px Arial", fill: 'black'});
		    letras_Musica2 = this.game.add.text(10, 625,'COMPOSER: Howard Shore',{font: "Bold 30px Arial", fill: 'black'});
		    letras_Musica3 = this.game.add.text(10, 640,'ARRANGED BY: Tuvi (Youtube)',{font: "Bold 60pt Arial", fill: 'black'});
		
		
		    letras_Musica.stroke = '#EEE8AA';
		    letras_Musica.strokeThickness = 4.5;
		    letras_Musica.alpha = 0.7;
		    letras_Musica2.stroke = '#EEE8AA';
		    letras_Musica2.strokeThickness = 4.5;
		    letras_Musica2.alpha = 0.7;
		    letras_Musica3.stroke = '#EEE8AA';
		    letras_Musica3.strokeThickness = 4.5;
		    letras_Musica3.alpha = 0.7;
		    
		    button = this.game.add.button(392.5, 232, 'Boton1', this.actionOnClick1, this,1,0);
		    button.width = 220;
		    button.height = 100;
		
		    button2 = this.game.add.button(392.5, 360, 'Boton2', this.actionOnClick3, this,1,0);
		    button2.width = 220;
		    button2.height = 100;
		
		    button3 = this.game.add.button(392.5, 488, 'Boton3', this.actionOnClick2, this,1,0);
		    button3.width = 220;
		    button3.height = 100;
		    
		    aviso_Server = this.game.add.sprite(730, 360, 'PantallaMenu_Servidor_Desconectado');
		    aviso_Server.width = 245;
		    aviso_Server.height = 270;
		    aviso_Server.alpha = 0;
		    
		    texto_aviso1 = this.add.text(805, 395, '*/ ERROR */', { fontSize: '18px', fill: '#FE0000'});
		    texto_aviso1.alpha = 0;
		    texto_aviso1.stroke = '#000000';
		    texto_aviso1.strokeThickness = 3;
		    
		    texto_aviso = this.add.text(755, 440, 'Servidor desconectado', { fontSize: '18px', fill: '#000000'});
		    texto_aviso.alpha = 0;
		    texto_aviso.stroke = '#EEE8AA';
		    texto_aviso.strokeThickness = 2;
		    
		    texto_aviso2 = this.add.text(755, 480, 'Sentimos las molestias', { fontSize: '18px', fill: '#000000'});
		    texto_aviso2.alpha = 0;
		    texto_aviso2.stroke = '#EEE8AA';
		    texto_aviso2.strokeThickness = 2;

		    texto_aviso3 = this.add.text(770, 520, 'Por favor, vuelve a', { fontSize: '18px', fill: '#000000'});
		    texto_aviso3.alpha = 0;
		    texto_aviso3.stroke = '#EEE8AA';
		    texto_aviso3.strokeThickness = 2;
		    
		    texto_aviso4 = this.add.text(765, 560, 'intentarlo mas tarde', { fontSize: '18px', fill: '#000000'});
		    texto_aviso4.alpha = 0;
		    texto_aviso4.stroke = '#EEE8AA';
		    texto_aviso4.strokeThickness = 2;
		    
		    this.game.time.events.loop(Phaser.Timer.SECOND*0.5, comprobarServer, this);
	  },
	  
	  changeVolume: function (pointer) 
	  {
	    if (pointer.x < 500)
	    {
	    	music.volume -= 0.05;
	    }
	    else if (pointer.x > 500)
	    {
	        music.volume += 0.05;
	    }
	  },
	
	  actionOnClick1: function () 
	  {
		    music.pause();
		    music.destroy();
		    this.game.state.start('Cinematic');
	  },
	
	  actionOnClick2: function () 
	  {
		    music.pause();
		    music.destroy();
		    this.game.state.start('ControlMenu');
		    leerFichero();
	  },
	
	  actionOnClick3: function () 
	  {	  
		  if(serverDisconnected == false)
		  {
			  music.pause();
			  music.destroy();
			  this.game.state.start('OnlineRoom');  
		  }
		  else if (serverDisconnected == true)
		  {
			  aviso_Server.alpha = 1;
			  texto_aviso.alpha = 1;
			  texto_aviso1.alpha = 1;
			  texto_aviso2.alpha = 1;
			  texto_aviso3.alpha = 1;
			  texto_aviso4.alpha = 1;
			  this.game.time.events.add(Phaser.Timer.SECOND*7, function()
					  {
				  		aviso_Server.alpha = 0; 
				  		texto_aviso.alpha = 0;
				  		texto_aviso1.alpha = 0;
						texto_aviso2.alpha = 0;
						texto_aviso3.alpha = 0;
						texto_aviso4.alpha = 0;
					  }, this);
		  }
	  }
  
};

function comprobarServer()
{
	$.ajax({
		method: 'GET',
		url: 'http://192.168.0.155:8090/jugadores',
		success: function(jugadores)
		{
			serverDisconnected = false;
			console.log(serverDisconnected);
		}
	}).fail(function () {
		serverDisconnected = true;
		console.log(serverDisconnected);
    })
}
///historialJugadores
function leerFichero()
{
	$.ajax({
		method: 'GET',
		url: 'http://192.168.0.155:8090/historialJugadores'
	}).done(function (lista) {
		console.log(lista);
	}).fail(function () {
		serverDisconnected = true;
		console.log(serverDisconnected);
    })
}

