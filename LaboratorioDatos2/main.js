var juego = new Phaser.Game(920, 530, Phaser.CANVAS, 'game');
var cont=0;
var time;
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
        time = juego.time.now;
		juego.state.add('estadoDos', estadoDos);
        juego.state.start('estadoDos');
	// centro de poder del juego
        
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
    juego.load.image('tubo1', 'imagenes/tubo1.png');
    juego.load.image('tubo2', 'imagenes/tubo2.png');
	juego.load.image('codo1', 'imagenes/codo1.png');
    juego.load.image('codo2', 'imagenes/codo2.png');
    juego.load.image('codo3', 'imagenes/codo3.png');
    juego.load.image('codo4', 'imagenes/codo4.png');

    },

	create: function () {
	//muestra recursos
     
	background = juego.add.tileSprite(0, 0, 920, 530, 'fondo');
	var boton1 = this.add.button(10, 450, 'reiniciar', this.reiniciarJuego, this);
	var boton2 = this.add.button(725, 400, 'done', this.juegoTerminado, this);
	blank = juego.add.tileSprite(732, 455, 175, 45, 'blanks');
	salida = juego.add.tileSprite(270, 10, 100, 107, 'salida');
	llegada = juego.add.tileSprite(606, 420, 100, 107, 'llegada');
 	tubo1 = juego.add.tileSprite(750, 135, 22, 76, 'tubo1');
    tubo2 = juego.add.tileSprite(805, 135, 76, 22, 'tubo2');
    codo1 = juego.add.tileSprite(750, 250, 34, 38, 'codo1');
    codo2 = juego.add.tileSprite(795, 180, 38, 34, 'codo2');
    codo3 = juego.add.tileSprite(865, 180, 34, 38, 'codo3');
    codo4 = juego.add.tileSprite(820, 250, 38, 34, 'codo4');
	TEnable();
    timer = juego.add.text(105, 45, juego.time.now);
    },

	reiniciarJuego: function () {
        juego.state.add('inicial', estadoInicial);
        juego.state.start('inicial');         
	},

    juegoTerminado: function(){
        juego.state.add('estadoTres', estadoTres);
        juego.state.start('estadoTres');
    },

    update: function(){
	// centro de poder del juego
       //console.log (tuboArrastrado()); 
        VerificarUnion(tubo1, salida);
        console.log(time);
        if ((juego.time.now-time+1)<30007){
            timer.text = (juego.time.now-time)/1000; 
        }
    
    },

};

//var EstadoTres = {
    //console.log(Estado tres);
//};

//function Time(){
  //  if(juego.time.now==30000){
    //    juego.state.add('estadoTres', estadoTres);
      //  juego.state.start´('estadoTres');
   // }
//}

//function tuboArrastrado(){
//console.log(juego.input.mousePointer.position.x); 
//for (tubos: Tubos tubo){
//if ((juego.input.mousePointer.x>=codo.x) && (juego.input.mousePointer.x<=codo.x+34) && (juego.input.mousePointer.y>=codo.y) && (juego.input.mousePointer.y<=codo.y+38)) 
 //{

 //return codo;
 //}

//}
 
//}
    
    function VerificarUnion(tuboArrastrado,tubo2){
        
    ///// FALTA MODIFICACI0ÓN: CODIGO DE PRUEBA Y GUIA; VERIFICAR SI HAY CERCANIA CON ALGUNO DE LOS TUBOS QUE SE ENCUENTRA EN USO
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
        tubo1.inputEnabled=true;
        tubo1.input.enableDrag(true);
        tubo2.inputEnabled=true;
        tubo2.input.enableDrag(true);
        codo1.inputEnabled=true;
        codo1.input.enableDrag(true);
        codo2.inputEnabled=true;
        codo2.input.enableDrag(true);
        codo3.inputEnabled=true;
        codo3.input.enableDrag(true);
        codo4.inputEnabled=true;
        codo4.input.enableDrag(true);
    
   }



juego.state.add('inicial', estadoInicial);
juego.state.start('inicial');


