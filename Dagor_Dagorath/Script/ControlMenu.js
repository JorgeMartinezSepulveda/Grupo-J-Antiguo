var DagorDagorath = DagorDagorath || {};
var ventanaControles;
var button;
var tween;

DagorDagorath.ControlMenu = function(){};

DagorDagorath.ControlMenu.prototype = {
  create: function() {
  	//set world dimensions
    this.game.world.setBounds(0, 0, 1000, 667);

    //background
    this.background = this.game.add.tileSprite(0, 0, 1000, 667, 'background3');

  	ventanaControles = this.game.add.sprite(100,58, 'controles');
    ventanaControles.width = 800;
    ventanaControles.height = 550;

    /*
    var w = this.game.width - ventanaControles.width;
    var h = this.game.height - ventanaControles.height;

    tween = this.game.add.tween(ventanaControles).to( { x: [ w, w, 0, 0 ], y: [ 0, h, h, 0 ] }, 4000, "Sine.easeInOut", true, -1, false);
  */

    tween = this.game.add.tween(ventanaControles.scale).to({x: 0.95, y: 0.95}, 2000, Phaser.Easing.Linear.None);
    tween.start();
    tween = this.game.add.tween(ventanaControles).to({x: 70, y: 25}, 2000, Phaser.Easing.Linear.None);
    tween.start();


    button = this.game.add.button(210, 137, 'BotonRetroceso', this.actionOnClick, this,1,0);
    button.width = 85;
    button.height = 60;

  },

   actionOnClick: function () 
  {
    this.game.state.start('MainMenu');
  }

};

