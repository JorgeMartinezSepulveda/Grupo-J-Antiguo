var DagorDagorath = DagorDagorath || {};
var button;
var cursors;
var image1;
var tropa1;
var sprite;
//title screen
DagorDagorath.Game = function(){};

DagorDagorath.Game.prototype = {
	create: function() {

	//set world dimensions
	this.game.world.setBounds(0, 0, 2000, 667);

  //background
  this.background = this.game.add.tileSprite(0, 0, 2000, 667, 'back');
  
  button = this.game.add.button(30, 30, 'BotonRetroceso', this.actionOnClick, this,1,0);
  button.width = 90;
  button.height = 60;
  button.fixedToCamera = true;

  image1 = this.game.add.sprite(800, 30, 'fondotropas');
  image1.fixedToCamera = true;

  tropa1 = this.game.add.button(820, 45, 'BotonRetroceso', this.actionOnClick1, this,1,0);
  tropa1.width = 20;
  tropa1.height = 20;
  tropa1.fixedToCamera = true;

  cursors = this.game.input.keyboard.createCursorKeys();

},

update: function () {

	if(game.input.mousePointer.x>900){
            game.camera.x+=6;
    } else if(game.input.mousePointer.x<50){
            game.camera.x-=6;
    }

},
actionOnClick: function () 
{
	this.game.state.start('MainMenu');
},
actionOnClick1: function () 
{
	sprite = this.game.add.sprite(100, 525, 'momia');


	sprite.animations.add('walk');

	sprite.animations.play('walk', 20, true);

	this.game.add.tween(sprite).to({ x: this.game.width+800 }, 20000, Phaser.Easing.Linear.None, true);
}
};