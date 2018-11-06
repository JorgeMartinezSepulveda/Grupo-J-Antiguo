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

    //Audio
    this.load.audio('Menu_Music','audio/The Lord Of The Rings - Concerning Hobbits.wav');
    this.load.audio('Cinematic_Music','audio/May It Be - Lord Of The Rings.wav');
    this.load.audio('isengard','audio/isengard.ogg');


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
    this.load.image('monedas', 'images/monedas.png');

    this.load.image('Fondo', 'images/Ilustracion1_FONDO.png');
    this.load.image('Ilustracion1_Marco', 'images/Ilustracion1_MARCONEGRO.png');
    this.load.image('Ilustracion1_Letras', 'images/Ilustracion1_LETRAS.png');
    this.load.image('Ilustracion1_Tierra', 'images/Ilustracion1_MAPA.png');
    this.load.image('Ilustracion1_Olas', 'images/ilustracion1_OLAS.png');

    this.load.image('Ilustracion2_Marco', 'images/ilustracion2_MARCO.png');
    this.load.image('Ilustracion2_Morgoth', 'images/Ilustracion_2_MORGOTH.png');
    this.load.image('Ilustracion2_Nazguls', 'images/ilustracion2_NAZGUL.png');

    this.load.image('Ilustracion3_Valar', 'images/Ilustracion_3_valar.png');
    this.load.image('Ilustracion3_Valar2', 'images/Ilustracion_3_valar2.png');

    this.load.image('base1', 'images/base1.png');
    this.load.image('base2', 'images/base2.png');
    this.load.image('barravidabg', 'images/barravidabg.png');
    this.load.image('barravida', 'images/barravida.png');

    this.load.image('back', 'images/A_FONDO.png');
    this.load.image('fondotropas', 'images/Panel_Tropas.png');
    this.load.spritesheet('momia', 'images/Enano_Andando_Sheet.png', 85, 115);
    this.load.spritesheet('enanolvl2', 'images/Enano_Andando_Sheetlvl2.png', 85, 115);
    this.load.spritesheet('BotonHome', 'images/boton_home.png',194,190);
    this.load.spritesheet('Boton_Tropa_Enano', 'images/boton_tropa_enano.png',194,190);
    this.load.spritesheet('boton_tropa_nivel', 'images/boton_tropa_nivel.png',97,95);
    this.load.spritesheet('enanopegando', 'images/Enano_Ataque_Spritesheet.png', 114, 115);
    this.load.spritesheet('enanolvl2pegando', 'images/Enano_Ataque_Spritesheetlvl2.png', 114, 115);    
    this.load.spritesheet('Trasgo_Andando_Sheet', 'images/Trasgo_Andando_Sheet.png',105,75);
    this.load.spritesheet('Trasgo_pegando','images/Trasgo_Atacando_Sheet.png',105,75);
    this.load.spritesheet('Trasgo_Pegando', 'images/Trasgo_Atacando_Sheet.png',105,75);
    this.load.image('Menu_Pausa', 'images/Imagen_Menu_Pausa.png');
    this.load.image('Mascara_Menu_Pausa', 'images/Mascara_MenuPausa.png');
    this.load.spritesheet('Boton_Menu_Pausa', 'images/boton_pausa.png',194,190);
    this.load.spritesheet('Boton_Vuelta_A_Inicio', 'images/boton_pausa_regresoAMenu.png',296,143);
    this.load.spritesheet('Boton_Reinicio', 'images/Boton_Final_Reiniciar.png',296,143);
    this.load.image('Pantalla_Final_Victoria', 'images/Pantalla_Victoria.png');
    this.load.image('Pantalla_Final_Derrota', 'images/Pantalla_Derrota.png');
    this.load.image('Panel_Stats_Enano', 'images/Panel_Stats.png');



    this.load.image('Texto_1', 'images/Texto1.png');
    this.load.image('Texto_1_2', 'images/Texto1_2.png');
    this.load.image('Texto_2', 'images/Texto2.png');
    this.load.image('Texto_3', 'images/Texto3.png');
    this.load.image('Texto_4', 'images/Texto4.png');
    

  },
  create: function() {
  	this.state.start('MainMenu');  //'MainMenu'
  }
};