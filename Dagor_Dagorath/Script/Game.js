var DagorDagorath = DagorDagorath || {};
var button;
var cursors;
var image1;
//title screen
DagorDagorath.Game = function(){};

DagorDagorath.Game.prototype = {
  create: function() {
	//set world dimensions
  this.game.world.setBounds(0, 0, 1500, 667);

  //background
  this.background = this.game.add.tileSprite(0, 7, 1500, 667, 'back');
  
  button = this.game.add.button(30, 30, 'BotonRetroceso', this.actionOnClick, this,1,0);
  button.width = 90;
  button.height = 60;
  button.fixedToCamera = true;

  image1 = this.game.add.sprite(800, 30, 'fondotropas');
  image1.fixedToCamera = true;

  cursors = this.game.input.keyboard.createCursorKeys();

},

update: function () {

  if (cursors.left.isDown)
  {
    this.game.camera.x -= 6;
  }
  else if (cursors.right.isDown)
  {
    this.game.camera.x += 6;
  }

},

actionOnClick: function () 
{
  this.game.state.start('MainMenu');
}

};