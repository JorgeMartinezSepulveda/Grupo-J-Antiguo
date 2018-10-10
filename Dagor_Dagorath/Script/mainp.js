var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('sky', 'tutorial/assets/sky.png')
	game.load.image('ground', 'tutorial/assets/platform.png');
	game.load.image('star', 'tutorial/assets/star.png');
	game.load.spritesheet('dude', 'tutorial/assets/PRUEBA2.png', 16, 32);
}
var platforms;
var player; //Creamos player y le damos una serie de propiedades
var cursors;
var stars;
var pos;
var score = 0;
var scoreText;

function create() {

	//Activamos las fisicas, de tipo arcade que son las mas sencillas
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0, 0, 'sky');
	platforms = game.add.group(); //crea un 'grupo' para guardar game objects
	platforms.enableBody = true; //activa las fisicas para todos los objetos de este grupo
	
	//crea una nueva variable para el suelo dentro del grupo platforms, le pasa la x, la y, y el sprite
	var ground = platforms.create(0, game.world.height - 64, 'ground');
	ground.scale.setTo(2, 2); //se escala para que quepa en el width
    ground.body.immovable = true; //esto evita que el suelo se caiga cuando saltes en el
	
	var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;
    ledge = platforms.create(-150, 250, 'ground');
    ledge.body.immovable = true;

    //le damos la posicion y el sprite al objeto player
    player = game.add.sprite(16, game.world.height - 150, 'dude');
    
    //activamos las fisicas
    game.physics.arcade.enable(player); 

    //Ponemos una serie de propiedades a las fisicas
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300; //simula la gravedad gracias al .body de las fisicas
    player.body.collideWorldBounds = true;

    //Añadimos las animaciones de andar
    player.animations.add('left', [0, 1, 2, 3, 4, 5], 10, true);
    player.animations.add('right', [8, 9, 10, 11, 12, 13], 10, true);

    //activa cursors para usarlo como key object para usar el teclado
    cursors = game.input.keyboard.createCursorKeys();

    //creamos el grupo de estrellas
    stars = game.add.group();
    stars.enableBody = true;

    //Rellenamos con un for el grupo de estrellas
    for (var i = 0; i < 12; i++)
    {
        //creamos una estrella dentro del grupo
        var star = stars.create(i * 70, 0, 'star');

        //Le ponemos la gravedad para que caiga
        star.body.gravity.y = 50;

        //Solo hace que rebote de manera aleatoria
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }

    //Creamos el texto para el score
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
}

function update() {

	
	//chequea la colision entre el jugador y las plataformas
	var hitPlatform = game.physics.arcade.collide(player, platforms);

	player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
    	pos = 1;
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');

    }
    else if (cursors.right.isDown)
    {
    	pos = 0;
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
     
    }
    else
    {
        //  Stand still
        player.animations.stop();

        if(pos == 1){
        	player.frame = 6;
        }
        else{
        	player.frame = 7;
        }
        
        
    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down && hitPlatform)
    {
        player.body.velocity.y = -300;
    }

    //Colisiones de las estrellas
    game.physics.arcade.collide(stars, platforms);

    //Para comprobar si se superponen jugador y estrellas
    game.physics.arcade.overlap(player, stars, collectStar, null, this);

}

function collectStar (player, star) {

    //Elimina la estrellas de la pantalla
    star.kill();

    score += 10;
    scoreText.text = 'Score: ' + score;

}