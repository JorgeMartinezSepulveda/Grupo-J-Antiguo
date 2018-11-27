var DagorDagorath = DagorDagorath || {};

DagorDagorath.Boot = function(){};

//setting game configuration and loading the assets for the loading screen
DagorDagorath.Boot.prototype = {
  preload: function() {
  	//assets we'll use in the loading screen
    this.load.image('logo', 'Dagor/images/Titulo.png');
    this.load.image('preloadbar', 'Dagor/images/preloader-bar.png');
  },
  create: function() {
  	//loading screen will have a white background
    this.game.stage.backgroundColor = '#fff';

    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.setMinMax(450,300,1000, 667);
	
	  //have the game centered horizontally
	  this.scale.pageAlignHorizontally = true;

	  //physics system for movement
	  this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.state.start('Preload');
  }
};
