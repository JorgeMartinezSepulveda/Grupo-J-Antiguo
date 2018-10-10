var DagorDagorath = DagorDagorath || {};
var button;
//title screen
DagorDagorath.Game = function(){};

DagorDagorath.Game.prototype = {
  create: function() {
  	//set world dimensions
    this.game.world.setBounds(0, 0, 1000, 667);

    //background
    this.background = this.game.add.tileSprite(0, 0, 1000, 667, 'background2');
    
    button = this.game.add.button(30, 30, 'BotonRetroceso', this.actionOnClick, this,1,0);
    button.width = 90;
    button.height = 60;

  },

   actionOnClick: function () 
  {
    this.game.state.start('MainMenu');
  }
};
