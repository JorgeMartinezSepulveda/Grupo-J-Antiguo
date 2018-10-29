var DagorDagorath = DagorDagorath || {};
var button;
var cursors;
var image1;
var tropa1;
var sprite;
var trasgos;
var enanos;
var dineroIA= 2000;
var dinero = 2000;
var dineroTexto = 2000;
var enanotimer= 0;
var contadorenano=0;

DagorDagorath.Game = function(){};

DagorDagorath.Game.prototype = {
  create: function() {

  //Dimensiones del mundo
  this.game.world.setBounds(0, 0, 2000, 667);

  //Fondo del estado
  this.background = this.game.add.tileSprite(0, 0, 2000, 667, 'back');

  dineroTexto = this.add.text(80, 20, '2000', { fontSize: '32px', fill: '#EBE54C' });
  dineroTexto.fixedToCamera = true;

  button = this.game.add.button(15, 15, 'BotonHome', this.actionOnClick, this,1,0);
  button.width = 50;
  button.height = 50;
  button.fixedToCamera = true;

  image1 = this.game.add.sprite(760, 15, 'fondotropas');
  image1.width = 225 ;
  image1.height = 75;
  image1.fixedToCamera = true;

  contadorenano = this.add.text(800, 100, '0', { fontSize: '18px', fill: '#000000' });
  contadorenano.fixedToCamera = true;

  tropa1 = this.game.add.button(775, 28, 'BotonHome', this.actionOnClick1, this,1,0);
  tropa1.width = 50;
  tropa1.height = 50;
  tropa1.fixedToCamera = true;

  cursors = this.game.input.keyboard.createCursorKeys();

  this.trasgos = this.game.add.group();
  this.trasgos.enableBody = true;
  this.trasgos.physicsBodyType = Phaser.Physics.ARCADE;

  this.enanos = this.game.add.group();
  this.enanos.enableBody = true;
  this.enanos.physicsBodyType = Phaser.Physics.ARCADE;
  },

  generateEnanos: function()
  {
    
    //var vida = vida || 0;
    var en;
    en = this.enanos.create(330, 545, 'momia');
    en.width = 55.25;
    en.height = 65;
    en.vida = 100;
    en.animations.add('walk');
    en.animations.play('walk', 7.5, true);
    en.body.velocity.x = 30;
    dinero -= 100;
    dineroTexto.setText(dinero);
    enanotimer= 1;
    //this.game.add.tween(en).to({ x:'-800'}, 20000, Phaser.Easing.Linear.None, true);
  },

  generateTrasgos: function(vida)
  {
    var vida = vida || 0;
    var tras;
    tras = this.trasgos.create(1800, 545, 'momia');
    tras.width = 55.25;
    tras.height = 65;
    tras.animations.add('walk');
    tras.animations.play('walk', 7.5, true);
    tras.body.velocity.x = -30;
    //this.game.add.tween(tras).to({ x:'800'}, 20000, Phaser.Easing.Linear.None, true);
  },

  update: function () {

    //movimiento de camara con raton
    if(this.game.input.mousePointer.x>985)
    {
      this.game.camera.x+=6;
    } 
    else if(this.game.input.mousePointer.x<15)
    {
      this.game.camera.x-=6;
    }

    //movimiento de camara con teclado
    if (cursors.left.isDown)
    {
      this.game.camera.x -= 6;
    }
    else if (cursors.right.isDown)
    {
      this.game.camera.x += 6;
    }

    
    contadorenano.setText(enanotimer);

    this.game.debug.text("Time until event: " + this.game.time.events.duration.toFixed(0), 32, 100);

    this.game.physics.arcade.collide(this.enanos,this.trasgos, this.pruebaColision,null,this);
    this.game.physics.arcade.collide(this.enanos,this.enanos, this.colisionMismoGrupo,null,this);
    
  },

  enanostimer: function(){
    enanotimer=0;
  },

  pruebaColision: function(enan, trasg)
  {
    enan.animations.stop(null, true);
    enan.body.velocity.x = 0;
    console.log(enan.vida);
    trasg.animations.stop(null, true);
    trasg.body.velocity.x = 0;
  },

  colisionMismoGrupo: function(grupo, grupo)
  {
    grupo.animations.stop(null, true);
    grupo.body.velocity.x = 0;
  },

  actionOnClick: function () //Boton, provisional, para volver al menu de inicio
  {
    this.game.state.start('MainMenu');
  },

  actionOnClick1: function () //Prueba de spawn de tropas aliadas
  {
    if (dinero>=100 && enanotimer==0){
      this.generateEnanos();
      this.generateTrasgos(); 
      if (enanotimer==1){
      this.game.time.events.add(Phaser.Timer.SECOND*3, this.enanostimer, this);
    } 
    }
  }
};