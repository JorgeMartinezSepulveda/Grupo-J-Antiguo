var DagorDagorath = DagorDagorath ||{};

var button;
var button2;
var button3;

var texto;
var texto2;
var texto3;
var texto4;
var texto5;
var texto6;
var texto7;
var texto8;
var texto9;
var textoUser1;
var textoUser2;
var textoAvisoNombre;
var textoAvisoServidor;

var textoAvisoNombreNoPermitido;

var arrayNombres;
var isFree = true;

var mascaraFin;
var pantallaServidorDesconectado;

var id;
var name = null;
var bando;

var seleccionado = false;
var caparBoton1 = false;
var caparBoton2 = false;

var numJugadores;
var oldlength=0;
var panel;
var titulo;

var listaJugadores;
var actualiza = false;
var serverDisconnected = false;

var timerEvents = [];
var iAux = 1;

DagorDagorath.OnlineRoom = function(){};

DagorDagorath.OnlineRoom.prototype = {
		create: function() 
		{
			this.background = this.game.add.tileSprite(0, 0, 1000, 667, 'Fondo');

			button = this.game.add.button(20, 20, 'BotonRetroceso', this.actionOnClick, this,1,0);
			button.width = 85;
			button.height = 60;

			panel = this.game.add.sprite(275, 580, 'Panel_Conectado');
			panel.width = 450;
			panel.height = 55;
			panel.alpha = 0;

			titulo = this.game.add.sprite(352, 20, 'Titulo_Online');

			button2 = this.game.add.button(136.5, 220, 'BotonEnanoOnline', this.actionOnClick2, this,1,0);

			button3 = this.game.add.button(636.5, 220, 'BotonTrasgoOnline', this.actionOnClick3, this,1,0);

			texto = this.add.text(300, 595, '- Conectado al servidor, esperando jugador 2 -', { fontSize: '18px', fill: '#000000' });
			texto.alpha = 0;
			texto.stroke = '#EEE8AA';
			texto.strokeThickness = 3;

			texto2 = this.add.text(300, 595, '- Conectado al servidor, esperando jugador 2 -', { fontSize: '18px', fill: '#000000' });
			texto2.alpha = 0;
			texto2.stroke = '#EEE8AA';
			texto2.strokeThickness = 3.5;

			texto7 = this.add.text(295, 595, '- Conexión establecida, iniciando la partida -', { fontSize: '18px', fill: '#000000' });
			texto7.alpha = 0;                 //Conexión establecida entre ambos jugadores
			texto7.stroke = '#EEE8AA';
			texto7.strokeThickness = 3.5;
			
			texto5 = this.add.text(390, 220, 'SELECCIONE UN BANDO', { fontSize: '18px', fill: '#000000'});
			texto5.stroke = '#EEE8AA';
			texto5.strokeThickness = 3.5;

			texto3 = this.add.text(125, 540, ' Ya has seleccionado un bando ', { fontSize: '18px', fill: '#FE0000', backgroundColor: '#FDFDFD' });
			texto3.alpha = 0;

			texto4 = this.add.text(595, 540, ' Ya has seleccionado un bando ', { fontSize: '18px', fill: '#FE0000', backgroundColor: '#FDFDFD' });
			texto4.alpha = 0;
			
			texto8 = this.add.text(136, 545, 'Este bando ya esta cogido', { fontSize: '18px', fill: '#FE0000'});
			texto8.alpha = 0;
			texto8.stroke = '#000000';
			texto8.strokeThickness = 3;

			texto9 = this.add.text(636, 545, 'Este bando ya esta cogido', { fontSize: '18px', fill: '#FE0000'});
			texto9.alpha = 0;
			texto9.stroke = '#000000';
			texto9.strokeThickness = 3;
			
			textoUser1 = this.add.text(390, 415, '- VALAR: ', { fontSize: '18px', fill: '#000000'});
			
			textoUser2 = this.add.text(390, 465, '- MORGOTH: ', { fontSize: '18px', fill: '#000000'});
			
			textoAvisoNombre = this.add.text(396, 375, '* Introduce un nombre *', { fontSize: '18px', fill: '#000000'});
			textoAvisoNombre.alpha = 0;
			textoAvisoNombre.stroke = '#EEE8AA';
			textoAvisoNombre.strokeThickness = 3;
			
			textoAvisoNombreNoPermitido = this.add.text(390, 375, '*Ese nombre ya existe*', { fontSize: '18px', fill: '#000000'});
			textoAvisoNombreNoPermitido.alpha = 0;
			textoAvisoNombreNoPermitido.stroke = '#EEE8AA';
			textoAvisoNombreNoPermitido.strokeThickness = 3;
			

			mascaraFin = this.game.add.sprite(0, 0, 'Mascara_Menu_Pausa');
		    mascaraFin.alpha = 0;
		    
		    pantallaServidorDesconectado = this.game.add.sprite(180, 100, 'Pantalla_Servidor_Desconectado');
		    pantallaServidorDesconectado.width = 640;
		    pantallaServidorDesconectado.height = 462;
		    pantallaServidorDesconectado.alpha = 0;
			
			texto6 = this.add.text(400, 265, 'Numero de jugadores: 0', { fontSize: '18px', fill: '#000000'});
			
			document.getElementById('namedong').style.display = 'block';
			
			timerEvents[iAux] = this.game.time.events.loop(Phaser.Timer.SECOND*0.5, this.comprobarJugadores, this);
			
			this.game.time.events.loop(Phaser.Timer.SECOND*0.5, leerFichero, this);
			
			
			//this.actualizar();

		},
		
		comprobarJugadores: function()
		{
			$.ajax({
				method: 'GET',
				url: 'http://192.168.0.155:8090/jugadores/',
				success: function(jugadores)
				{
					numJugadores = jugadores.length;

					if(oldlength!== numJugadores)
					{
						listaJugadores = jugadores;
						actualiza = true;
					}
					else
					{
						actualiza = false;
					}
				}
			}).fail(function () {
				serverDisconnected = true;
		    })
		},

		update: function()
		{	
			if(actualiza)
			{
				this.actualizar();
				this.actualizarBotones();
				this.actualizarJugadores();
				actualiza = false;
			}
			
			if(serverDisconnected)
			{
				serverDisconnected = false;
				this.game.time.events.remove(timerEvents[iAux]);
				texto6.setText('');
				document.getElementById('namedong').style.display = 'none' ;
				mascaraFin.alpha = 1;
				pantallaServidorDesconectado.alpha = 1;
				deleteUserRoom();
				this.game.time.events.add(Phaser.Timer.SECOND*6, function()
					{
						this.reiniciarVariables();
						this.game.state.start('MainMenu');
					}, this);
			}
		},
		
		actualizar: function()
		{
			caparBoton1=false;
			caparBoton2=false;

			for(var i = 0; numJugadores > i; i++ )
			{
				if(listaJugadores[i].personaje == 1)
				{
					caparBoton1 = true;
				} 
				else if(listaJugadores[i].personaje == 2)
				{
					caparBoton2 = true;
				}
			}

			if ((numJugadores > 0)&&(seleccionado))
			{
				if (numJugadores == 2)//Si el hay dos jugadores conectados empieza la partida
				{
					texto.alpha = 0;
					texto2.alpha = 0;
					texto7.alpha = 1;
					var idAux = id;
					this.game.time.events.add(Phaser.Timer.SECOND*2, function()
						{
							this.reiniciarVariables();
							this.game.state.start('OnlineGame',true,false, idAux);
						}, this);
				} 
				else if(numJugadores == 1)
				{
					if(listaJugadores[0].personaje == 1)
					{
						texto.alpha = 1;
						texto7.alpha = 0;
					} 
					else if(listaJugadores[0].personaje == 2)
					{
						texto2.alpha = 1;
						texto7.alpha = 0;
					}
				}
			}
			
			texto6.setText('Numero de jugadores: ' + numJugadores);			
			oldlength=numJugadores;
			
		},
		
		actualizarBotones: function ()
		{
			if((numJugadores == 1)&&(!seleccionado))
			{
				if(listaJugadores[0].personaje == 1)
				{
					button2.alpha = 0.5;
					button3.alpha = 1;
				} 
				else if(listaJugadores[0].personaje == 2)
				{
					button2.alpha = 1;
					button3.alpha = 0.5;
				}
			}
			else if((numJugadores == 1)&&(seleccionado)) 
			{
				if(listaJugadores[0].personaje == 1)
				{
					button2.alpha = 1;
					button3.alpha = 0.7;
				} 
				else if(listaJugadores[0].personaje == 2)
				{
					button2.alpha = 0.7;
					button3.alpha = 1;
				}
				
			}
			else if(numJugadores == 2)
			{
				if(listaJugadores[0].personaje == bando)
				{
					button2.alpha = 1;
					button3.alpha = 0.5;
				} 
				else
				{
					button2.alpha = 0.5;
					button3.alpha = 1;
				}
			}
			else if(numJugadores == 0)
			{
				button2.alpha = 1;
				button3.alpha = 1;
			}
		},
		
		actualizarJugadores: function()
		{
			if((numJugadores == 1)&&(!seleccionado))
			{
				if(listaJugadores[0].personaje == 1)
				{
					textoUser1.setText('- VALAR: ' + listaJugadores[0].nombre);
					textoUser2.setText('- MORGOTH: ');
				} 
				else if(listaJugadores[0].personaje == 2)
				{
					textoUser1.setText('- VALAR: ');
					textoUser2.setText('- MORGOTH: ' + listaJugadores[0].nombre);
				}
			}
			else if((numJugadores == 1)&&(seleccionado)) 
			{
				if(listaJugadores[0].personaje == 1)
				{
					textoUser1.setText('- VALAR: ' + name);
					textoUser2.setText('- MORGOTH: ');
				} 
				else if(listaJugadores[0].personaje == 2)
				{
					textoUser1.setText('- VALAR: ');
					textoUser2.setText('- MORGOTH: ' + name);
				}
				
			}
			else if(numJugadores == 2)
			{
				if(listaJugadores[0].personaje == 1)
				{
					textoUser1.setText('- VALAR: ' + listaJugadores[0].nombre);
					textoUser2.setText('- MORGOTH: ' + listaJugadores[1].nombre);
				} 
				else if(listaJugadores[0].personaje == 2)
				{
					textoUser1.setText('- VALAR: ' + listaJugadores[1].nombre);
					textoUser2.setText('- MORGOTH: ' + listaJugadores[0].nombre);
				}
			}
			else if(numJugadores == 0)
			{
				textoUser1.setText('- VALAR: ');
				textoUser2.setText('- MORGOTH: ');
			}
			
		},

		actionOnClick: function()
		{ 
			deleteUserRoom();
			this.reiniciarVariables();
			this.game.state.start('MainMenu');
		},
		
		reiniciarVariables: function()
		{
			numJugadores = 0;
			oldlength = 0;
			id = 0;
			bando = 0;
			
			seleccionado = false;
			caparBoton1 = false;
			caparBoton2 = false;
			actualiza = false;
			isFree = true;
			
			name = null;
			listaJugadores = null;
			
			button2.alpha = 1;
			button3.alpha = 1;

			texto6.setText('');
			textoUser1.setText('- VALAR: ');
			textoUser2.setText('- MORGOTH: ');
			
			mascaraFin.alpha = 0;
			pantallaServidorDesconectado.alpha = 0;
			serverDisconnected = false;
			
			document.getElementById('namedong').style.display = 'none' ;
		},

		actionOnClick2: function()
		{
			if(!caparBoton1)
			{	
				if(seleccionado == false)
				{
					var input = $('#namedong');
    				name = input.val();
    				
					if(name !== '')
					{
						var contador = 0;
						
						while((contador < arrayNombres.length)&&(isFree)&&(arrayNombres[contador] != null))
						{
							if(arrayNombres[contador] == name)
							{
								isFree = false;
								console.log('Nombre cogido ompare')
								
							}
							else
							{
								isFree = true;
								contador++;
							}
						}
						
						if(isFree)
						{
							console.log(name);
		    				bando = 1;
		    				createUser();
						}
						else
						{
							isFree = true;
							textoAvisoNombreNoPermitido.alpha = 1;
							this.game.time.events.add(Phaser.Timer.SECOND*2, function(){textoAvisoNombreNoPermitido.alpha = 0;}, this);
						}
					}
					else
					{
						textoAvisoNombre.alpha = 1;
						this.game.time.events.add(Phaser.Timer.SECOND*2, function(){textoAvisoNombre.alpha = 0;}, this);
					}
				}
				else
				{
					texto3.alpha = 1;
					this.game.time.events.add(Phaser.Timer.SECOND*2, function(){texto3.alpha = 0;}, this);
				}
			}
			else
			{
				texto8.alpha = 1;
				this.game.time.events.add(Phaser.Timer.SECOND*2, function(){texto8.alpha = 0;}, this);
			}
		},

		actionOnClick3: function()
		{
			if(!caparBoton2)
			{	
				if(seleccionado == false)
				{
					var input = $('#namedong');
    				name = input.val();
    				
					if(name !== '')
					{
						var contador = 0;
						
						while((contador < arrayNombres.length)&&(isFree)&&(arrayNombres[contador] != null))
						{
							if(arrayNombres[contador] == name)
							{
								isFree = false;
								console.log('Nombre cogido ompare')
								
							}
							else
							{
								isFree = true;
								contador++;
							}
						}
						
						if(isFree)
						{
							console.log(name);
		    				bando = 2;
		    				createUser();
						}
						else
						{
							isFree = true;
							textoAvisoNombreNoPermitido.alpha = 1;
							this.game.time.events.add(Phaser.Timer.SECOND*2, function(){textoAvisoNombreNoPermitido.alpha = 0;}, this);
						}
					}
					else
					{
						textoAvisoNombre.alpha = 1;
						this.game.time.events.add(Phaser.Timer.SECOND*2, function(){textoAvisoNombre.alpha = 0;}, this);
					}
				}
				else
				{
					texto4.alpha = 1;
					panel.alpha = 1;
					this.game.time.events.add(Phaser.Timer.SECOND*2, function(){texto4.alpha = 0;}, this);
				}
			}
			else
			{
				texto9.alpha = 1;
				this.game.time.events.add(Phaser.Timer.SECOND*2, function(){texto9.alpha = 0;}, this);
			}
		}
}

window.onbeforeunload = function() 
{
	deleteUserRoom();
	return null;
}

function deleteUserRoom()
{
	$.ajax({
		method: 'DELETE',
		url: 'http://192.168.0.155:8090/jugadores/' + id 
	})
}

function writeUser(){
	$.ajax({
		method: "GET",
		url: 'http://192.168.0.155:8090/jugadores/' + id
	})
}

function leerFichero()
{
	$.ajax({
		method: 'GET',
		url: 'http://192.168.0.155:8090/historialJugadores'
	}).done(function (listaAux) {
		arrayNombres = listaAux;
	})
}

function createUser(){
	$.ajax({
		method: "POST",
		url: 'http://192.168.0.155:8090/jugadores',   //192.168.0.155
		data: JSON.stringify({"nombre": name, "conectado":true, "personaje": bando}),
		processData: false,
		headers: {
			"Content-Type": "application/json"
		},
		success: function()
		{
			if(numJugadores == 1)
			{
				texto.alpha = 1;
			} 
			else if(numJugadores == 2)
			{
				texto.alpha = 0;
				texto7.alpha = 1;
			}

			panel.alpha = 1;
			seleccionado = true;
		}
	}).done(function (id1) 
		{
			id = id1;
			console.log(id);
			writeUser();
		})
}