var juego = new Phaser.Game(626, 417, Phaser.CANVAS, 'game');
var tiempo= juego.Timer;
var estadoInicial = {

	preload: function () {
	//carga recursos
	juego.load.image('fondo', 'imagenes/fondoCoc.jpg');
        
juego.load.image('sumideroI', 'imagenes/sumideroOff.png');
        juego.load.image('sumideroF', 'imagenes/sumideroOn.png');
	},

	create: function () {
	//muestra recursos
	background = juego.add.tileSprite(0, 0, 626, 417, 'fondo');
   sumideroI= juego.add.sprite(juego.rnd.integerInRange(25,450) , 0, 'sumideroI');
     sumideroF = juego.add.sprite(400,200, 'sumideroF');

	},

	update: function () {
        
            sumideroF.visible=true;
            
        
	// centro de poder del juego
            console.log(tiempo);
            console.log("HOLA");
            sumideroI.visible=false;
        
	}

};
juego.state.add('inicial', estadoInicial);
juego.state.start('inicial');

