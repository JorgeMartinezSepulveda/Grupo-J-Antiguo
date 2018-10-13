var DagorDagorath = DagorDagorath || {};
var button;
var tween;
var tween2;

var tierra;
var marco;
var letras;
var olas;

var alrededores;
var morgoth;
var nazguls;

DagorDagorath.Cinematic = function(){};

DagorDagorath.Cinematic.prototype = {
	create: function() {

		//set world dimensions
		this.game.world.setBounds(0, 0, 1000, 667);

		//background
		this.background = this.game.add.tileSprite(0, 0, 1000, 667, 'Fondo');

		olas = this.game.add.sprite(0,0,'Ilustracion1_Olas');

		marco = this.game.add.sprite(0,0, 'Ilustracion1_Marco');
		marco.width = 1000;
		marco.height = 667;

		tierra = this.game.add.sprite(65,85, 'Ilustracion1_Tierra');
		tierra.width = 860;
		tierra.height = 500;


		tierra.alpha = 1;
		olas.alpha = 1;
		
		//Cinematica 2///////////////////////////////////////////////////////
		alrededores = this.game.add.sprite(0,0,'Ilustracion2_Marco');
		alrededores.width = 1000;
		alrededores.height = 667;
		alrededores.alpha = 0;

		morgoth = this.game.add.sprite(-580,20,'Ilustracion2_Morgoth');
	 	morgoth.width = 580;
		morgoth.height = 667;

	 	nazguls = this.game.add.sprite(500,-150,'Ilustracion2_Nazguls');
	 	nazguls.width = 370;
		nazguls.height = 150;
		/////////////////////////////////////////////////////////////////////
		  
		tween = this.game.add.tween(olas).to({x: -500}, 20000, Phaser.Easing.Linear.None);   
		tween.start(); 
		tween = this.game.add.tween(tierra.scale).to({x: 0.55, y: 0.55}, 20000, Phaser.Easing.Linear.None);
		tween.start();
		tween = this.game.add.tween(tierra).to({x: -120, y: -100}, 20000, Phaser.Easing.Linear.None);
		tween.start();
		tween = this.game.add.tween(tierra).to( { alpha: 0 }, 20000, "Linear", true);
		tween.start();

		tween.onComplete.add(this.actionOnClick, this); 

		button = this.game.add.button(925, 20, 'BotonAvance', this.saltar, this,0,1);
		button.width = 55;
		button.height = 40;

		button.alpha = 0.7;

	},

	actionOnClick: function () 
	{
		tween = this.game.add.tween(olas).to( { alpha: 0 }, 1000, "Linear", true);
		tween.start();
		tween2 = this.game.add.tween(olas).to({x: -1000}, 20000, Phaser.Easing.Linear.None);   
		tween2.start();
		tween.onComplete.add(this.cinematica2, this);
		//this.game.state.start('Game');
	},

	cinematica2: function()
	{

		tween = this.game.add.tween(alrededores).to( { alpha: 1 }, 3000, "Linear", true);
		tween.start();

		tween.onComplete.add(this.entradaMorgoth, this);

	},

	entradaMorgoth: function()
	{
		tween = this.game.add.tween(morgoth).to({x: 0}, 3000, Phaser.Easing.Linear.None);   
		tween.start();

		tween.onComplete.add(this.entradaNaguls, this);

	},

	entradaNaguls: function()
	{
		tween = this.game.add.tween(nazguls).to({x:450, y:20}, 3000, Phaser.Easing.Linear.None);   
		tween.start();

		tween.onComplete.add(this.salidaNaguls, this);
	},

	salidaNaguls: function()
	{
		tween = this.game.add.tween(nazguls).to({x:400, y:-150}, 3000, Phaser.Easing.Linear.None);   
		tween.start();

		tween.onComplete.add(this.saltar, this);
	},

	saltar: function(){
		this.game.state.start('Game');
	}
}