var DagorDagorath = DagorDagorath || {};
var button;
var tween;

var tierra;
var marco;
var letras;
var olas;

DagorDagorath.Cinematic = function(){};

DagorDagorath.Cinematic.prototype = {
	create: function() {
		//set world dimensions
	this.game.world.setBounds(0, 0, 1500, 667);

	  //background
	this.background = this.game.add.tileSprite(0, 0, 1200, 667, 'Fondo');

	olas = this.game.add.sprite(0,0,'Ilustracion1_Olas');

	marco = this.game.add.sprite(0,0, 'Ilustracion1_Marco');
	marco.width = 1000;
	marco.height = 667;

	tierra = this.game.add.sprite(65,85, 'Ilustracion1_Tierra');
	tierra.width = 860;
	tierra.height = 500;


	tierra.alpha = 1;
	  
	tween = this.game.add.tween(olas).to({x: -1000}, 2000, Phaser.Easing.Linear.None);   
	tween.start(); 
	tween = this.game.add.tween(tierra.scale).to({x: 0.55, y: 0.55}, 2000, Phaser.Easing.Linear.None);
	tween.start();
	tween = this.game.add.tween(tierra).to({x: -120, y: -100}, 2000, Phaser.Easing.Linear.None);
	tween.start();

	tween = this.game.add.tween(tierra).to( { alpha: 0 }, 2000, "Linear", true);

	    //Para hacer otra cosa cuando acabe la animacion se usa nombreSprite.onComplete.add(NombreFuncion, this);
	tween.onComplete.add(this.actionOnClick, this); //Esto nos lleva al menu una vez acabada la animacion

	button = this.game.add.button(30, 30, 'BotonRetroceso', this.actionOnClick, this,1,0);
	button.width = 90;
	button.height = 60;

	},

	actionOnClick: function () 
	{
	  this.game.state.start('Game');
	}
}