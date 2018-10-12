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
  
  button = this.game.add.button(15, 15, 'BotonHome', this.actionOnClick, this,1,0);
  button.width = 50;
  button.height = 50;
  button.fixedToCamera = true;

  image1 = this.game.add.sprite(800, 25, 'fondotropas');
  image1.width =175 ;
  image1.height = 85;
  image1.fixedToCamera = true;

  tropa1 = this.game.add.button(815, 40, 'BotonRetroceso', this.actionOnClick1, this,1,0);
  tropa1.width = 30;
  tropa1.height = 30;
  tropa1.fixedToCamera = true;

  cursors = this.game.input.keyboard.createCursorKeys();

},

update: function () {

	if(this.game.input.mousePointer.x>900){
            this.game.camera.x+=6;
    } else if(this.game.input.mousePointer.x<50){
            this.game.camera.x-=6;
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