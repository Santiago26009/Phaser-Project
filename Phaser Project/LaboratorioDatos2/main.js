var juego = new Phaser.Game(920, 530, Phaser.CANVAS, 'game');
var tiempo= juego.Timer;
var estadoInicial = {

	preload: function () {
	//carga recursos
	juego.load.image('fondo', 'imagenes/Inicio1.png');
        
        juego.load.image('boton', 'imagenes/Start2.png');
	},

	create: function () {
	//muestra recursos
	background = juego.add.tileSprite(0, 0, 920, 530, 'fondo');
	var boton = this.add.button(395, 250, 'boton', this.iniciarJuego, this);

	},

	iniciarJuego: function () {
		juego.state.add('estadoDos', estadoDos);
        juego.state.start('estadoDos');
            
        
	// centro de poder del juego
            console.log(tiempo);
            console.log("HOLA");
        
	}

};

var estadoDos = {

	preload: function () {
	//carga recursos
	juego.load.image('fondo', 'imagenes/Interfaz1.png');
    juego.load.image('done', 'imagenes/Done1.png');
    juego.load.image('reiniciar', 'imagenes/Restart1.png');
    juego.load.image('blanks', 'imagenes/Blank.png');
    juego.load.image('salida', 'imagenes/Salida.png');
    juego.load.image('llegada', 'imagenes/Llegada.png');
	},

	create: function () {
	//muestra recursos
	background = juego.add.tileSprite(0, 0, 920, 530, 'fondo');
	var boton1 = this.add.button(10, 450, 'reiniciar', this.reiniciarJuego, this);
	var boton2 = this.add.button(725, 400, 'done', this.iniciarJuego, this);
	blank = juego.add.tileSprite(732, 455, 175, 45, 'blanks');
	salida = juego.add.tileSprite(270, 10, 100, 107, 'salida');
	llegada = juego.add.tileSprite(606, 420, 100, 107, 'llegada');
 	
	},

	reiniciarJuego: function () {	
        juego.state.add('inicial', estadoInicial);
        juego.state.start('inicial');
            
        
	// centro de poder del juego
            console.log(tiempo);
            console.log("HOLA");
        
	}

};

juego.state.add('inicial', estadoInicial);
juego.state.start('inicial');


