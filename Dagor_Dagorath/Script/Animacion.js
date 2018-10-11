var DagorDagorath = DagorDagorath || {};

DagorDagorath.Animacion = function(){};

DagorDagorath.Game.prototype = {
  create: function() {
  	//set world dimensions
    this.game.world.setBounds(0, 0, 1920, 1920);
    //background
    this.background = this.game.add.tileSprite(0, 0, 1000, 667, 'background2');
  },
};