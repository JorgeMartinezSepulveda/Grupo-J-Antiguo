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
//title screen
DagorDagorath.MainMenu = function(){};

DagorDagorath.MainMenu.prototype = {
  create: function() 
  {
  	//show the space tile, repeated
    this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
                                             //0, 0, this.game.width, this.game.height, 'background'

    music=this.game.add.audio('Menu_Music',0.5, true); 
    music.play();
    this.game.input.onDown.add(this.changeVolume, this);

    //give it speed in x
    this.background.autoScroll(-20, -20);

    menu = this.game.add.sprite(283.3, 32.5, 'titulo');
    menu.width = 433.4;
    menu.height = 600;

    letras_Musica = this.game.add.text(10, 605,'MUSIC',{font: "Bold 40px Arial", fill: 'black'});
    letras_Musica2 = this.game.add.text(10, 625,'COMPOSER: Jhon Williams',{font: "Bold 30px Arial", fill: 'black'});
    letras_Musica3 = this.game.add.text(10, 640,'ARRANGED BY: Tuvi (Youtube)',{font: "Bold 60pt Arial", fill: 'black'});


    letras_Musica.stroke = '#EEE8AA';
    letras_Musica.strokeThickness = 5;
    letras_Musica.alpha = 0.6;
    letras_Musica2.stroke = '#EEE8AA';
    letras_Musica2.strokeThickness = 5;
    letras_Musica2.alpha = 0.6;
    letras_Musica3.stroke = '#EEE8AA';
    letras_Musica3.strokeThickness = 5;
    letras_Musica3.alpha = 0.6;
    
    button = this.game.add.button(392.5, 232, 'Boton1', this.actionOnClick1, this,1,0);
    button.width = 220;
    button.height = 100;

    button2 = this.game.add.button(392.5, 360, 'Boton2', this.actionOnClick3, this,1,0);
    button2.width = 220;
    button2.height = 100;

    button3 = this.game.add.button(392.5, 488, 'Boton3', this.actionOnClick2, this,1,0);
    button3.width = 220;
    button3.height = 100;

  },
  changeVolume: function (pointer) {

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
  },

  actionOnClick3: function () 
  {
    music.pause();
    music.destroy();
    this.game.state.start('OnlineRoom');
  }

};

