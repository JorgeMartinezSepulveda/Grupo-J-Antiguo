var DagorDagorath = DagorDagorath || {};

//loading the game assets
DagorDagorath.Preload = function(){};

DagorDagorath.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.splash.anchor.setTo(0.5);

    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    this.load.image('titulo', 'images/titulo4.png');
    this.load.image('controles', 'images/Controles.png');
    this.load.spritesheet('Boton1', 'images/boton.png',296,143);
    this.load.spritesheet('Boton2', 'images/boton_2.png',296,143);
    this.load.spritesheet('Boton3', 'images/boton3.png',296,143);
    this.load.spritesheet('BotonRetroceso', 'images/boton_retroceso.png',300,190);
    this.load.spritesheet('BotonAvance', 'images/boton_avance.png',300,190);
    this.load.image('background', 'images/dagor.png');
    this.load.image('background2', 'images/dagor_escalada.png');
    this.load.image('background3', 'images/Ilustracion_2.png');

    this.load.image('Fondo', 'images/Ilustracion1_FONDO.png');
    this.load.image('Ilustracion1_Marco', 'images/Ilustracion1_MARCONEGRO.png');
    this.load.image('Ilustracion1_Letras', 'images/Ilustracion1_LETRAS.png');
    this.load.image('Ilustracion1_Tierra', 'images/Ilustracion1_MAPA.png');
    this.load.image('Ilustracion1_Olas', 'images/ilustracion1_OLAS.png');

    this.load.image('Ilustracion2_Marco', 'images/ilustracion2_MARCO.png');
    this.load.image('Ilustracion2_Morgoth', 'images/Ilustracion_2_MORGOTH.png');
    this.load.image('Ilustracion2_Nazguls', 'images/ilustracion2_NAZGUL.png');

    this.load.image('back', 'images/A_FONDO.png');
    this.load.image('fondotropas', 'images/Panel_Tropas.png');
    this.load.spritesheet('momia', 'images/Enano_Andando_Sheet.png', 85, 100);
    this.load.spritesheet('BotonHome', 'images/boton_home.png',194,190);

    this.load.image('Texto_1', 'images/Texto1.png');
    this.load.image('Texto_1_2', 'images/Texto1_2.png');
    this.load.image('Texto_2', 'images/Texto2.png');
    this.load.image('Texto_3', 'images/Texto3.png');

  },
  create: function() {
    this.state.start('MainMenu');  //'MainMenu'
  }
};;