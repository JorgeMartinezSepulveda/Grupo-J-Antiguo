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
var monedas;
var enAtacando=0;
var trasAtacando=0;
var continua=false;
var continua2=false;
var showDebug = true;
var barravidabg1;
var barravidabg2;
var barravida1;
var barravida2;
var base1;
var base2;
var bottonnivel;
var niveltropa=1;
var lvl;

DagorDagorath.Game = function(){};

DagorDagorath.Game.prototype = {
  create: function() {

//Dimensiones del mundo
  this.game.world.setBounds(0, 0, 2000, 667);

//Fondo del estado
  this.background = this.game.add.tileSprite(0, 0, 2000, 667, 'back');

  this.base = this.game.add.group();
  this.base.enableBody = true;
  this.base.physicsBodyType = Phaser.Physics.ARCADE;

  base1 = this.base.create(0, 330, 'base1'); 
  base1.vida= 200;
  base1.body.setSize(368, 300, 0, 0);

  base2 = this.base.create(1694, 136, 'base2'); 
  base2.vida= 200;
  base2.body.setSize(300, 400, 0, 0);

  barravidabg1 = this.game.add.sprite(50, 630, 'barravidabg');
  barravida1 = this.game.add.sprite(50, 630, 'barravida');
  barravidabg1.alpha = 0;
  barravida1.alpha = 0;

  barravidabg2 = this.game.add.sprite(1750, 630, 'barravidabg');
  barravida2 = this.game.add.sprite(1750, 630, 'barravida');
  barravidabg2.alpha = 0;
  barravida2.alpha = 0;

  dineroTexto = this.add.text(100, 20, '2000', { fontSize: '30px', fill: '#EBE54C' });
  dineroTexto.fixedToCamera = true;

  monedas = this.game.add.sprite(70, 25, 'monedas');
  monedas.fixedToCamera = true;

  button = this.game.add.button(15, 15, 'BotonHome', this.actionOnClick, this,1,0);
  button.width = 50;
  button.height = 50;
  button.fixedToCamera = true;

  image1 = this.game.add.sprite(760, 15, 'fondotropas');
  image1.width = 225 ;
  image1.height = 100;
  image1.fixedToCamera = true;

  bottonnivel = this.game.add.button(790, 70, 'boton_tropa_nivel', this.sibirnivel, this,1,0);
  bottonnivel.width = 25;
  bottonnivel.height = 25;
  bottonnivel.fixedToCamera = true;

  contadorenano = this.add.text(740, 35, '0', { fontSize: '18px', fill: '#000000' });
  contadorenano.fixedToCamera = true;

  lvl = this.add.text(775, 92, 'lvl = 1', { fontSize: '18px', fill: '#000000' });
  lvl.fixedToCamera = true;

  tropa1 = this.game.add.button(775, 20, 'Boton_Tropa_Enano', this.actionOnClick1, this,1,0);
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

  base1.inputEnabled = true;
  base2.inputEnabled = true;

<<<<<<< HEAD
=======
  mascara = this.game.add.sprite(0, 0, 'Mascara_Menu_Pausa');
  mascara.alpha = 0;
  mascara.fixedToCamera = true;

  mascarafinal1 = this.game.add.sprite(0, 0, 'Mascara_Menu_Final1');
  mascarafinal1.alpha = 0;
  mascarafinal1.fixedToCamera = true;

  mascarafinal2 = this.game.add.sprite(0, 0, 'Mascara_Menu_Final2');
  mascarafinal2.alpha = 0;
  mascarafinal2.fixedToCamera = true;


  button = this.game.add.button(15, 15, 'Boton_Menu_Pausa', this.actionOnClick, this,1,0);
  button.width = 50;
  button.height = 50;
  button.fixedToCamera = true;

  image_menu = this.game.add.sprite(180, 100, 'Menu_Pausa');//image_menu
  image_menu.width = 640;
  image_menu.height = 462;
  image_menu.fixedToCamera = true;
  image_menu.alpha = 0;

  button2_menu_Pause = this.game.add.button(-300,-300, 'Boton_Vuelta_A_Inicio', this.backToMenu, this,1,0);
  button2_menu_Pause.width = 220;
  button2_menu_Pause.height = 100;
  button2_menu_Pause.alpha = 0;
  button2_menu_Pause.fixedToCamera = true;

  this.game.time.events.loop(this.game.rnd.integerInRange(3000, 8000), this.generateTrasgos, this);

  this.game.input.onDown.add(this.unpause, this);



  },

  backToMenu: function()
  {
    console.log('Hola');
    this.game.paused = false;
    this.state.start('MainMenu');
    console.log('Adio');
>>>>>>> master
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

    if (base1.input.pointerOver())
    {
      barravidabg1.alpha = 1;
      barravida1.alpha = 1;
    }
    else
    {
      barravidabg1.alpha = 0;
      barravida1.alpha = 0;
    }

    if (base2.input.pointerOver())
    {
      barravidabg2.alpha = 1;
      barravida2.alpha = 1;
    }
    else
    {
      barravidabg2.alpha = 0;
      barravida2.alpha = 0;
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
  this.game.debug.bodyInfo(this.enanos, 500, 300);
  this.game.debug.body(this.enanos);

  this.game.physics.arcade.collide(this.enanos,this.trasgos, this.pruebaColision,null,this);
  this.game.physics.arcade.collide(this.enanos,this.enanos, this.colisionMismoGrupo,null,this);
  this.game.physics.arcade.collide(this.trasgos,this.trasgos, this.colisionMismoGrupo2,null,this);
  this.game.physics.arcade.collide(this.enanos,this.base, this.colisionconbase,null,this);

  if (continua){
    this.enanos.setAll('body.velocity.x',30);
    this.enanos.callAll('loadTexture',null,'momia', 0);
    this.enanos.callAll('play',null,'walk',7.5,true);
    continua=false;
  }

  if (continua2){
    this.trasgos.setAll('body.velocity.x',-30);
    this.trasgos.callAll('loadTexture',null,'Trasgo_Andando_Sheet', 0);
    this.trasgos.callAll('play',null,'walk',7,true);
    continua2=false;
  }
  
},

sibirnivel: function(){
  dinero -= 500;
  niveltropa = 2;
  lvl.setText('lvl = ' + niveltropa);
},

generateEnanos: function(){
  if (niveltropa==1){
  var en;
  en = this.enanos.create(370, 545, 'momia');
  en.width = 55.25;
  en.height = 65;
<<<<<<< HEAD
  en.vida = 105;
=======
  en.vida = 100;
>>>>>>> master
  en.daño = 25;
  en.animations.add('walk');
  en.animations.play('walk', 7.5, true);
  en.body.velocity.x = 30;
  dinero -= 100;
  dineroTexto.setText(dinero);
  enanotimer= 1;
  en.body.setSize(100, 91, 5, 5);
  }
  if (niveltropa==2){
  var en2;
  en2 = this.enanos.create(370, 545, 'enanolvl2');
  en2.width = 55.25;
  en2.height = 65;
  en2.vida = 105;
  en2.daño = 30;
  en2.animations.add('andar');
  en2.animations.play('andar', 7.5, true);
  en2.body.velocity.x = 30;
  dinero -= 100;
  dineroTexto.setText(dinero);
  enanotimer= 1;
  en2.body.setSize(100, 91, 5, 5);
  }
},

generateTrasgos: function()
  {

    var tras;
    tras = this.trasgos.create(770, 561, 'Trasgo_Andando_Sheet');
    tras.width = 70;
    tras.height =50;
    tras.vida = 100;
    tras.daño = 15;
    tras.animations.add('walk');
    tras.animations.play('walk', 7, true);
    tras.body.velocity.x = -30;
    tras.body.setSize(100, 50, 50, 25);

  },

enanostimer: function(){
    enanotimer=0;
  },

pelea: function(ena, trasga){
  if (trasga.vida>0){
    continua=false;
    if (enAtacando==0){
      enAtacando=1;
      ena.loadTexture('enanopegando', 0);
      ena.animations.add('pegar');
      ena.animations.play('pegar', 7.5, true);
      this.game.time.events.add(Phaser.Timer.SECOND*0.70, function(){
        trasga.vida -= ena.daño;
        enAtacando=0;
        ena.body.velocity.x=1;
      }, this);
   
      console.log('vida trasgos'+ trasga.vida);
    }
  }
  if(ena.vida>0){
    continua2=false;
    if(trasAtacando==0){
      trasAtacando=1;
      trasga.loadTexture('Trasgo_pegando',0);
      trasga.animations.add('pegar');
      trasga.animations.play('pegar',7.5,true);
         this.game.time.events.add(Phaser.Timer.SECOND*0.50,function(){
        ena.vida-=trasga.daño;
        trasAtacando=0;
        trasga.body.velocity.x=-1;
        console.log('vida enano: '+ ena.vida);
      })
    }
  }   
  if(trasga.vida<=0){
    trasga.kill();
    ena.body.velocity.x=30;
    continua=true;
  }
  if(ena.vida<=0){
    ena.kill();
    trasga.body.velocity.x=-30;
    continua2=true;
    trasga.loadTexture('Trasgo_Andando_Sheet',0);
    trasga.animations.play('walk',7.5,true);
  }
},

pruebaColision: function(enan, trasg)
  {
    enan.animations.stop(null, true);
    enan.body.velocity.x = 0;        
    trasg.animations.stop(null, true);
    trasg.body.velocity.x = 0;
    this.pelea(enan, trasg);
  },

colisionMismoGrupo: function(grupo2, grupo1)
  {
    grupo1.animations.stop(null, false);
    grupo1.body.velocity.x = 0;
  },
  colisionMismoGrupo2: function(grupo, grupo)
  {
    grupo.animations.stop(null, false);
    grupo.body.velocity.x = 0;
  },

  colisionconbase: function(tropa, base){
    tropa.animations.stop(null, true);
    tropa.body.velocity.x = 0;
    this.peleabase(tropa, base);
  },

  peleabase: function(tropa, base){
    tropa.loadTexture('enanopegando', 0);
    tropa.animations.add('pegar');
    tropa.animations.play('pegar', 7.5, true);
  },


actionOnClick: function () //Boton, provisional, para volver al menu de inicio
  {
    this.game.state.start('MainMenu');
  },

  finalpartida1: function(){
    this.game.paused = true;
      image_menu.alpha = 1;
      mascara.alpha = 1;

      button2_menu_Pause.x = image_menu.x + 110;
      button2_menu_Pause.y = image_menu.y + 270;
      button2_menu_Pause.alpha = 1;
  },

actionOnClick1: function () //Prueba de spawn de tropas aliadas
  {
    if (dinero>=100 && enanotimer==0){
      this.generateEnanos();
      //this.generateTrasgos();
      if (enanotimer==1){
        this.game.time.events.add(Phaser.Timer.SECOND*3, this.enanostimer, this);
      } 
    }
  }
};