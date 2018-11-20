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
    this.load.audio('Menu_Music','Dagor/audio/The Lord Of The Rings - Concerning Hobbits.wav');
    this.load.audio('Cinematic_Music','Dagor/audio/May It Be - Lord Of The Rings.wav');
    this.load.audio('isengard','Dagor/audio/isengard.ogg');


    //load game assets
    this.load.image('titulo', 'Dagor/images/titulo4.png');
    this.load.image('controles', 'Dagor/images/Controles.png');
    this.load.spritesheet('Boton1', 'Dagor/images/boton.png',296,143);
    this.load.spritesheet('Boton2', 'Dagor/images/boton_2.png',296,143);
    this.load.spritesheet('Boton3', 'Dagor/images/boton3.png',296,143);
    this.load.spritesheet('BotonRetroceso', 'Dagor/images/boton_retroceso.png',300,190);
    this.load.spritesheet('BotonAvance', 'Dagor/images/boton_avance.png',300,190);
    this.load.image('background', 'Dagor/images/dagor.png');
    this.load.image('background2', 'Dagor/images/dagor_escalada.png');
    this.load.image('background3', 'Dagor/images/Ilustracion_2.png');
    this.load.image('monedas', 'Dagor/images/monedas.png');

    this.load.image('Fondo', 'Dagor/images/Ilustracion1_FONDO.png');
    this.load.image('Ilustracion1_Marco', 'Dagor/images/Ilustracion1_MARCONEGRO.png');
    this.load.image('Ilustracion1_Letras', 'Dagor/images/Ilustracion1_LETRAS.png');
    this.load.image('Ilustracion1_Tierra', 'Dagor/images/Ilustracion1_MAPA.png');
    this.load.image('Ilustracion1_Olas', 'Dagor/images/ilustracion1_OLAS.png');

    this.load.image('Ilustracion2_Marco', 'Dagor/images/ilustracion2_MARCO.png');
    this.load.image('Ilustracion2_Morgoth', 'Dagor/images/Ilustracion_2_MORGOTH.png');
    this.load.image('Ilustracion2_Nazguls', 'Dagor/images/ilustracion2_NAZGUL.png');

    this.load.image('Ilustracion3_Valar', 'Dagor/images/Ilustracion_3_valar.png');
    this.load.image('Ilustracion3_Valar2', 'Dagor/images/Ilustracion_3_valar2.png');

    this.load.image('base1', 'Dagor/images/base1.png');
    this.load.image('base2', 'Dagor/images/base2.png');
    this.load.image('barravidabg', 'Dagor/images/barravidabg.png');
    this.load.image('barravida', 'Dagor/images/barravida.png');

    this.load.image('back', 'Dagor/images/A_FONDO.png');
    this.load.image('fondotropas', 'Dagor/images/Panel_Tropas.png');
    this.load.spritesheet('momia', 'Dagor/images/Enano_Andando_Sheet.png', 85, 115);
    this.load.spritesheet('enanolvl2', 'Dagor/images/Enano_Andando_Sheetlvl2.png', 85, 115);
    this.load.spritesheet('BotonHome', 'Dagor/images/boton_home.png',194,190);
    this.load.spritesheet('Boton_Tropa_Enano', 'Dagor/images/boton_tropa_enano.png',194,190);
    this.load.spritesheet('boton_tropa_nivel', 'Dagor/images/boton_tropa_nivel.png',97,95);
    this.load.spritesheet('enanopegando', 'Dagor/images/Enano_Ataque_Spritesheet.png', 114, 115);
    this.load.spritesheet('enanolvl2pegando', 'Dagor/images/Enano_Ataque_Spritesheetlvl2.png', 114, 115);    
    this.load.spritesheet('Trasgo_Andando_Sheet', 'Dagor/images/Trasgo_Andando_Sheet.png',105,75);
    this.load.spritesheet('Trasgo_Pegando', 'Dagor/images/Trasgo_Atacando_Sheet.png',105,75);
    this.load.image('Menu_Pausa', 'Dagor/images/Imagen_Menu_Pausa.png');
    this.load.image('Mascara_Menu_Pausa', 'Dagor/images/Mascara_MenuPausa.png');
    this.load.spritesheet('Boton_Menu_Pausa', 'Dagor/images/boton_pausa.png',194,190);
    this.load.spritesheet('Boton_Vuelta_A_Inicio', 'Dagor/images/boton_pausa_regresoAMenu.png',296,143);
    this.load.spritesheet('Boton_Reinicio', 'Dagor/images/Boton_Final_Reiniciar.png',296,143);
    this.load.image('Pantalla_Final_Victoria', 'Dagor/images/Pantalla_Victoria.png');
    this.load.image('Pantalla_Final_Derrota', 'Dagor/images/Pantalla_Derrota.png');
    this.load.image('Panel_Stats_Enano', 'Dagor/images/Panel_Stats.png');

    this.load.image('Texto_1', 'Dagor/images/Texto1.png');
    this.load.image('Texto_1_2', 'Dagor/images/Texto1_2.png');
    this.load.image('Texto_2', 'Dagor/images/Texto2.png');
    this.load.image('Texto_3', 'Dagor/images/Texto3.png');
    this.load.image('Texto_4', 'Dagor/images/Texto4.png');
    
    this.load.spritesheet('BotonEnanoOnline', 'Dagor/images/boton_enano_on.png',227,320);   
    this.load.spritesheet('BotonTrasgoOnline', 'Dagor/images/boton_trasgo_on.png',227,320);
    this.load.image('Panel_Conectado', 'Dagor/images/Panel_Texto_Conectado.png');
    this.load.image('Titulo_Online', 'Dagor/images/boton_online.png');
    //boton_online.png
  },
  create: function() {
  	this.state.start('MainMenu');  //'MainMenu'
  }
};