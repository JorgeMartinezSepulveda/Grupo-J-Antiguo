var DagorDagorath = DagorDagorath || {};
var button;
var cursors;
var image1;
var image_menu;
var mascara;
var mascaraFin;
var button1_menu_Pause;
var button2_menu_Pause;
var panel_Stats;
var tropa1;
var sprite;
var trasgos;
var enanos;
var dineroIA= 2000;
var dinero = 1000;
var dineroTexto = 1000;
var enanotimer= 0;
var contadorenano=0;
var monedas;
var enAtacando=0;
var trasAtacando=0;
var continua=0;
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
var textvida = 100;
var textdaño = 25;

var musica;
var button_final;

var numeroEnanos = 0;

DagorDagorath.Game = function(){};

DagorDagorath.Game.prototype = {
  create: function() 
  {
    musica=this.game.add.audio('isengard',0.2, true);
    musica.play();
    //Dimensiones del mundo
    this.game.world.setBounds(0, 0, 2000, 667);

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    //Fondo del estado
    this.background = this.game.add.tileSprite(0, 0, 2000, 667, 'back');

    this.base = this.game.add.group();
    this.base.enableBody = true;
    this.base.physicsBodyType = Phaser.Physics.ARCADE;

    base1 = this.base.create(0, 330, 'base1'); 
    base1.vida= 200;
    base1.body.setSize(368, 300, 0, 267);
    base1.inputEnabled = true;
    base1.body.immovable = true;

    base2 = this.base.create(1694, 136, 'base2'); 
    base2.vida= 200;
    base2.body.setSize(300, 400, 0, 267);
    base2.inputEnabled = true;
    base2.body.immovable = true;

    barravidabg1 = this.game.add.sprite(50, 630, 'barravidabg');
    barravida1 = this.game.add.sprite(50, 630, 'barravida');
    barravidabg1.alpha = 0;
    barravida1.alpha = 0;

    barravidabg2 = this.game.add.sprite(1750, 630, 'barravidabg');
    barravida2 = this.game.add.sprite(1750, 630, 'barravida');
    barravidabg2.alpha = 0;
    barravida2.alpha = 0;

    dineroTexto = this.add.text(100, 20, '1000', { fontSize: '30px', fill: '#EBE54C' });
    dineroTexto.fixedToCamera = true;

    monedas = this.game.add.sprite(70, 25, 'monedas');
    monedas.fixedToCamera = true;

    image1 = this.game.add.sprite(760, 15, 'fondotropas');//image_menu
    image1.width = 225 ;
    image1.height = 75;
    image1.fixedToCamera = true;

    bottonnivel = this.game.add.button(840, 55, 'boton_tropa_nivel', this.subirNivel, this,1,0);
    bottonnivel.width = 25;
    bottonnivel.height = 26;
    bottonnivel.fixedToCamera = true;

    contadorenano = this.add.text(843, 32, '0', { fontSize: '18px', fill: '#000000' });
    contadorenano.fixedToCamera = true;

    lvl = this.add.text(775, 92, 'lvl = 1', { fontSize: '18px', fill: '#000000' });
    lvl.fixedToCamera = true;

    tropa1 = this.game.add.button(772, 22, 'Boton_Tropa_Enano', this.actionOnClick1, this,1,0);
    tropa1.width = 60;
    tropa1.height = 60;
    tropa1.fixedToCamera = true;
    tropa1.inputEnabled = true;

    cursors = this.game.input.keyboard.createCursorKeys();

    //Definicion Grupos de Tropas/////////////////////////////////////////////////////////////////
    this.trasgos = this.game.add.group();
    this.trasgos.enableBody = true;
    //this.trasgos.physicsBodyType = Phaser.Physics.ARCADE;
    this.game.physics.arcade.enable(this.trasgos);

    this.enanos = this.game.add.group();
    this.enanos.enableBody = true;
    //this.enanos.physicsBodyType = Phaser.Physics.ARCADE;
    this.game.physics.arcade.enable(this.enanos);
    //////////////////////////////////////////////////////////////////////////////////////////////

    panel_Stats = this.game.add.sprite(430, 15, 'Panel_Stats_Enano');
    panel_Stats.width = 310;
    panel_Stats.height = 161;
    panel_Stats.fixedToCamera = true;
    panel_Stats.alpha = 0;

    textvida = this.add.text(580, 65, 'Vida = 100', { fontSize: '24px', fill: '#000000' });
    textvida.alpha= 0;
    textvida.fixedToCamera = true;
    textvida.stroke = '#EEE8AA';
    textvida.strokeThickness = 3.5;

    textdaño = this.add.text(580, 110, 'daño = 25', { fontSize: '24px', fill: '#000000' });
    textdaño.alpha= 0;
    textdaño.fixedToCamera = true;
    textdaño.stroke = '#EEE8AA';
    textdaño.strokeThickness = 3.5;

    mascara = this.game.add.sprite(0, 0, 'Mascara_Menu_Pausa');
    mascara.alpha = 0;
    mascara.fixedToCamera = true; 

    button = this.game.add.button(15, 15, 'Boton_Menu_Pausa', this.actionOnClick, this,1,0);
    button.width = 50;
    button.height = 50;
    button.fixedToCamera = true;

    image_menu = this.game.add.sprite(180, 100, 'Menu_Pausa');
    image_menu.width = 640;
    image_menu.height = 462;
    image_menu.fixedToCamera = true;
    image_menu.alpha = 0;

    mascaraFin = this.game.add.sprite(0, 0, 'Mascara_Menu_Pausa');
    mascaraFin.alpha = 0;
    mascaraFin.fixedToCamera = true;

    mascarafinal1 = this.game.add.sprite(180, 100, 'Pantalla_Final_Victoria');
    mascarafinal1.width = 640;
    mascarafinal1.height = 462;
    mascarafinal1.alpha = 0;
    mascarafinal1.fixedToCamera = true;

    mascarafinal2 = this.game.add.sprite(180, 100, 'Pantalla_Final_Derrota');
    mascarafinal2.width = 640;
    mascarafinal2.height = 462;
    mascarafinal2.alpha = 0;
    mascarafinal2.fixedToCamera = true;

    button1_menu_Pause = this.game.add.button(-300,-300, 'Boton_Vuelta_A_Inicio', this.backToMenu, this,1,0);
    button1_menu_Pause.width = 220;
    button1_menu_Pause.height = 100;
    button1_menu_Pause.alpha = 0;
    button1_menu_Pause.fixedToCamera = true;

    button2_menu_Pause = this.game.add.button(-300,-300, 'Boton_Reinicio', this.restart, this,1,0);
    button2_menu_Pause.width = 220;
    button2_menu_Pause.height = 100;
    button2_menu_Pause.alpha = 0;
    button2_menu_Pause.fixedToCamera = true;

    button_final = this.game.add.button(-300,-300, 'Boton_Vuelta_A_Inicio', this.backToMenu, this,1,0);
    button_final.width = 220;
    button_final.height = 100;
    button_final.alpha = 0;
    button_final.fixedToCamera = true;

    this.game.time.events.loop(this.game.rnd.integerInRange(3000, 8000), this.generateTrasgos, this);

    this.game.input.onDown.add(this.unpause, this);


  },

  restart: function()
  {
    dinero = 1000;
    dineroTexto = 1000;
    dineroIA = 2000;
    enanotimer= 0;
    contadorenano=0;
    enAtacando=0;
    trasAtacando=0;
    continua=0;
    showDebug = true;
    niveltropa=1;
    textvida = 100;
    textdaño = 25;

    musica.pause();
    musica.destroy();

    this.game.paused = false;
    this.state.start('Game');
  },

  backToMenu: function()
  {
    dinero = 1000;
    dineroTexto = 1000;
    dineroIA = 2000;
    enanotimer= 0;
    contadorenano=0;
    enAtacando=0;
    trasAtacando=0;
    continua=0;
    showDebug = true;
    niveltropa=1;
    textvida = 100;
    textdaño = 25;

    musica.pause();
    musica.destroy();

    this.game.paused = false;
    this.state.start('MainMenu');
  },

  unpause: function(event)
  {
    if(this.game.paused === true)
    {
      console.log("Menu pausado");
    }
    else
    {
      console.log("Menu despausado");
    }
  },

  update: function () 
  {
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

    if (tropa1.input.pointerOver())
    {
      panel_Stats.alpha = 1;
      textvida.alpha = 1;
      textdaño.alpha = 1;
    }
    else
    {
      panel_Stats.alpha = 0;
      textdaño.alpha = 0;
      textvida.alpha = 0;
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

  this.game.physics.arcade.collide(this.enanos,this.trasgos, this.pruebaColision,null,this);
  this.game.physics.arcade.collide(this.enanos,this.enanos, this.colisionMismoGrupo,null,this);
  this.game.physics.arcade.collide(this.trasgos,this.trasgos, this.colisionMismoGrupo2,null,this);
  this.game.physics.arcade.collide(this.enanos,this.base, this.colisionconbase,null,this);
  this.game.physics.arcade.collide(this.trasgos,this.base, this.colisionconbase2,null,this);

  },

  render: function()
  {
    this.game.debug.text("Time until event: " + this.game.time.events.duration.toFixed(0), 32, 100);
    this.game.debug.bodyInfo(this.enanos, 500, 300);
    this.game.debug.body(this.enanos);
  },

  subirNivel: function()
  {
    if((dinero > 1000)&&(niveltropa == 1))
    {
      dinero -= 1000;
      dineroTexto.setText(dinero);
      niveltropa = 2;
      lvl.setText('lvl = ' + niveltropa);
      textvida.setText('vida = ' + 105);
      textdaño.setText('daño = ' + 30);
    }
    

  },

generateEnanos: function(){
  if (niveltropa==1){
    var en;
    en = this.enanos.create(370, 535, 'momia');
    en.width = 55.25;
    en.height = 75;
    en.vida = 100;
    en.daño = 25;
    en.animations.add('walk');
    en.animations.play('walk', 7.5, true);
    en.body.velocity.x = 30;
    dinero -= 100;
    dineroTexto.setText(dinero);
    enanotimer= 1;
    en.body.setSize(50, 91, 5, 5);
    numeroEnanos++;
  }
  else if (niveltropa==2)
  {
    var en2;
    en2 = this.enanos.create(370, 535, 'enanolvl2');
    en2.width = 55.25;
    en2.height = 75;
    en2.vida = 105;
    en2.daño = 30;
    en2.animations.add('andar');
    en2.animations.play('andar', 7.5, true);
    en2.body.velocity.x = 30;
    dinero -= 100;
    dineroTexto.setText(dinero);
    enanotimer= 1;
    en2.body.setSize(50, 91, 5, 5);
    numeroEnanos++;
  }
},

generateTrasgos: function()
  {

    var tras;
    tras = this.trasgos.create(1600, 561, 'Trasgo_Andando_Sheet');
    tras.width = 70;
    tras.height =50;
    tras.vida = 100;
    tras.daño = 5;
    tras.animations.add('walk');
    tras.animations.play('walk', 7, true);
    tras.body.velocity.x = -30;
    tras.body.setSize(50, 50, 5, 5);

  },

enanostimer: function(){
    enanotimer=0;
  },

pelea: function(ena, trasga)
{
  if (trasga.vida>0)
  {
    if (enAtacando==0)
    {
      enAtacando=1;
      ena.loadTexture('enanopegando', 0);
      ena.animations.add('pegar');
      ena.animations.play('pegar', 7.5, true);
    if (niveltropa==2){
      ena.loadTexture('enanolvl2pegando', 0);
      ena.animations.add('pegarlvl2');
      ena.animations.play('pegarlvl2', 7.5, true);
    }
      this.game.time.events.add(Phaser.Timer.SECOND*0.70, function()
      {
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
      trasga.loadTexture('Trasgo_Pegando',0);
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
    this.continua();
    dinero += 50;
    dineroTexto.setText(dinero);
  }
  if(ena.vida<=0){
    ena.kill();
    trasga.body.velocity.x=-30;
    this.continua();
  }
},


continua: function()
{
    this.enanos.setAll('body.velocity.x',30);
    this.enanos.callAll('loadTexture',null,'momia', 0);
    this.enanos.callAll('play',null,'walk',7.5,true);
  if(niveltropa==2)
  {
    this.enanos.setAll('body.velocity.x',30);
    this.enanos.callAll('loadTexture',null,'enanolvl2', 0);
    this.enanos.callAll('play',null,'andar',7.5,true);
  }
  this.trasgos.setAll('body.velocity.x',-30);
  this.trasgos.callAll('loadTexture',null,'Trasgo_Andando_Sheet', 0);
  this.trasgos.callAll('play',null,'walk',7,true);
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
    //grupo.animations.stop(null, true);
    grupo.body.velocity.x = 0;
  },

  colisionconbase: function(tropa, base){
    //tropa.animations.stop(null, true);
    tropa.body.velocity.x = 0;
    this.peleabase(tropa, base);
  },

  peleabase: function(tropa, base){
    if (enAtacando==0){
      enAtacando=1;
      if(niveltropa==1){
      tropa.loadTexture('enanopegando', 0);
      tropa.animations.add('pegar');
      tropa.animations.play('pegar', 7.5, true);
    } if (niveltropa==2){
      tropa.loadTexture('enanolvl2pegando', 0);
      tropa.animations.add('pegarlvl2');
      tropa.animations.play('pegarlvl2', 7.5, true);
    }
      this.game.time.events.add(Phaser.Timer.SECOND*0.70, function(){
        base.vida -= tropa.daño;
        enAtacando=0;
        tropa.body.velocity.x=1;
        barravida2.width -= tropa.daño;
      }, this);
   
      console.log('vida base'+ base.vida);
    }
    if(base.vida<=0){
      this.finalpartida1();
    }
  },

  colisionconbase2: function(tropa, base){
    //tropa.animations.stop(null, true);
    tropa.body.velocity.x = 0;
    this.peleabase2(tropa, base);
  },

  peleabase2: function(tropa, base){
    if (trasAtacando==0){
      trasAtacando=1;
      tropa.loadTexture('Trasgo_Pegando', 0);
      tropa.animations.add('pegar');
      tropa.animations.play('pegar', 7.5, true);
      this.game.time.events.add(Phaser.Timer.SECOND*0.50, function(){
        base.vida -= tropa.daño;
        trasAtacando=0;
        tropa.body.velocity.x=-1;
        barravida1.width -= tropa.daño;
      }, this);
   
      console.log('vida base'+ base.vida);
    }
    if(base.vida<=0){
      this.finalpartida2();
    }
  },


actionOnClick: function () //Boton, provisional, para volver al menu de inicio
  {
    if(this.game.paused === true)
    {
      this.game.paused = false;
      image_menu.alpha = 0;
      mascara.alpha = 0;

      button1_menu_Pause.x = -200;
      button1_menu_Pause.y = -200;
      button1_menu_Pause.alpha = 0;

      button2_menu_Pause.x = -200;
      button2_menu_Pause.y = -200;
      button2_menu_Pause.alpha = 0;
    }
    else
    {
      this.game.paused = true;
      image_menu.alpha = 1;
      mascara.alpha = 1;

      button1_menu_Pause.x = image_menu.x + 100;
      button1_menu_Pause.y = image_menu.y + 280;
      button1_menu_Pause.alpha = 1;

      button2_menu_Pause.x = image_menu.x + 320;
      button2_menu_Pause.y = image_menu.y + 280;
      button2_menu_Pause.alpha = 1;
    }
  },
  finalpartida1: function()
  {
    this.actionOnClick();
    mascarafinal1.alpha = 1;
    mascaraFin.alpha = 1;
    console.log('iaaa:' + button2_menu_Pause.alpha);
  },

  finalpartida2: function()
  {
    //mascarafinal2.alpha = 1;
    //mascaraFin.alpha = 1;
    button_final.x = 0;
    button_final.y = 0;
    button_final.alpha = 1;

    console.log(button_final.alpha);
    console.log(button_final.x);
    console.log(button_final.y);

    button2_menu_Pause.x = mascarafinal2.x + 320;
    button2_menu_Pause.y = mascarafinal2.y + 280;
    button2_menu_Pause.alpha = 1;

    this.game.paused = true;
  },

  actionOnClick1: function () //Prueba de spawn de tropas aliadas
  {
    if (dinero>=100 && enanotimer==0)
    {
      this.generateEnanos();
      //this.generateTrasgos();
      if (enanotimer==1)
      {
        this.game.time.events.add(Phaser.Timer.SECOND*3, this.enanostimer, this);
      } 
    }
  }
};