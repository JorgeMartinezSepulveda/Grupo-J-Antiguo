var DagorDagorath = DagorDagorath ||{};

DagorDagorath.game = new Phaser.Game(1000,667, Phaser.AUTO, '');

DagorDagorath.game.state.add('Boot', DagorDagorath.Boot);
DagorDagorath.game.state.add('Preload',DagorDagorath.Preload);
DagorDagorath.game.state.add('MainMenu',DagorDagorath.MainMenu);
DagorDagorath.game.state.add('Game', DagorDagorath.Game);
DagorDagorath.game.state.add('ControlMenu', DagorDagorath.ControlMenu);
DagorDagorath.game.state.add('Cinematic', DagorDagorath.Cinematic);
DagorDagorath.game.state.add('OnlineRoom', DagorDagorath.OnlineRoom);

DagorDagorath.game.state.start('Boot');
