var juego = new Phaser.Game(920, 530, Phaser.CANVAS, 'game');
var tiempo= juego.Timer;
var cont=0;
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
    juego.load.image('tubo', 'imagenes/Tubos/tubo1.png');
	},

	create: function () {
	//muestra recursos
	background = juego.add.tileSprite(0, 0, 920, 530, 'fondo');
	var boton1 = this.add.button(10, 450, 'reiniciar', this.reiniciarJuego, this);
	var boton2 = this.add.button(725, 400, 'done', this.iniciarJuego, this);
	blank = juego.add.tileSprite(732, 455, 175, 45, 'blanks');
	salida = juego.add.tileSprite(270, 10, 100, 107, 'salida');
	llegada = juego.add.tileSprite(606, 420, 100, 107, 'llegada');
 	tubo = juego.add.tileSprite(725, 250, 90, 193, 'tubo');
	TEnable();
    
    },

	reiniciarJuego: function () {	
        juego.state.add('inicial', estadoInicial);
        juego.state.start('inicial');
            
        
	},
    
    update: function(){
	// centro de poder del juego
        
    // tuboArrastrado(); ----> Toca buscar metodo que ayude a revisar qué tubo es el que se está arrastrando(variable);
        VerificarUnion(tubo, salida);
        
   
        
        
    }

};
    
    function VerificarUnion(tuboArrastrado,tubo2){
        
    ///// FALTA MODIFICACIÓN: CODIGO DE PRUEBA Y GUIA; VERIFICAR SI HAY CERCANIA CON ALGUNO DE LOS TUBOS QUE SE ENCUENTRA EN USO
        if (cont==0){
            tubo2=salida;
            if ((tuboArrastrado.x>=(tubo2.x) && (tuboArrastrado.x+90 <=(tubo2.x+100))) && ((tuboArrastrado.y>=(tubo2.y+80)) && (tuboArrastrado.y <= tubo2.y+117))){
                tuboArrastrado.x=tubo2.x;
                tuboArrastrado.y=tubo2.y+107;
                TNoEnable();
                }       
            
            }
            else {
                
                
                
            }
    }


    function TNoEnable(){
         ///// DESHABILITAR EL ENABLE DE TODOS LOS TUBOS CUANDO PASE EL TIEMPO 
        
         tubo.inputEnabled=false;
         tubo.input.enableDrag(false);
        
    }
  function TEnable(){
        ///// HABILITAR EL ENABLE DE TODOS LOS TUBOS AL CREARLOS

        tubo.inputEnabled=true;
        tubo.input.enableDrag(true);
    
   }



juego.state.add('inicial', estadoInicial);
juego.state.start('inicial');


