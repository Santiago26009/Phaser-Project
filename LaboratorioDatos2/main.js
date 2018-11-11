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
    juego.load.image('tubo', 'imagenes/tubo1.png');
	juego.load.image('codo', 'imagenes/codomejor.png');
   

    },

	create: function () {
	//muestra recursos
     
	background = juego.add.tileSprite(0, 0, 920, 530, 'fondo');
	var boton1 = this.add.button(10, 450, 'reiniciar', this.reiniciarJuego, this);
	var boton2 = this.add.button(725, 400, 'done', this.juegoTerminado, this);
	blank = juego.add.tileSprite(732, 455, 175, 45, 'blanks');
	salida = juego.add.tileSprite(270, 10, 100, 107, 'salida');
	llegada = juego.add.tileSprite(606, 420, 100, 107, 'llegada');
 	tubo = juego.add.tileSprite(725, 250, 22, 76, 'tubo');
    codo = juego.add.tileSprite(750, 250, 34, 38, 'codo');
	TEnable();
    timer = juego.add.text(105, 50, juego.time.now);
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
        VerificarUnion(tubo, salida);
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
        codo.inputEnabled=true;
        tubo.inputEnabled=true;
        tubo.input.enableDrag(true);
        codo.input.enableDrag(true);
    
   }



juego.state.add('inicial', estadoInicial);
juego.state.start('inicial');


