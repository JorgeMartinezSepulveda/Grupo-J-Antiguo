var DagorDagorath = DagorDagorath || {};
var ventanaControles;
var button;
var marco;
var olas;

DagorDagorath.ControlMenu = function(){};

DagorDagorath.ControlMenu.prototype = {
  create: function() {
  	//set world dimensions
    this.game.world.setBounds(0, 0, 1000, 667);

    //background
    this.background = this.game.add.tileSprite(0, 0, 1000, 667, 'Fondo');

    marco = this.game.add.sprite(0,0, 'Ilustracion1_Marco');
    marco.width = 1000;
    marco.height = 667;  

    olas = this.game.add.sprite(0,0,'Ilustracion1_Olas');  

  	ventanaControles = this.game.add.sprite(110,58, 'controles');
    ventanaControles.width = 780;
    ventanaControles.height = 550;

    button = this.game.add.button(206, 137, 'BotonRetroceso', this.actionOnClick, this,1,0);
    button.width = 85;
    button.height = 60;

  },

   actionOnClick: function () 
  {
    this.game.state.start('MainMenu');
  }

};

