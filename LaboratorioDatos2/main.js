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
    tubos = [tubo1, tubo2, codo1, codo2, codo3, codo4];
    tubosIn=[];
	this.TEnable();
    sw=true;
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

 tuboArrastrado: function(){
    for (var i=0; i<tubos.length; i++){
        if ((juego.input.mousePointer.x>=tubos[i]) && (juego.input.mousePointer.x<=tubos[i]+tubos[i].width) && (juego.input.mousePointer.y>=tubos[i]) && (juego.input.mousePointer.y<=tubos[i]+tubos[i].height)) 
        {
            return tubos[i];
        }

    }
            return null;
},


     TNoEnable:function(){
         ///// DESHABILITAR EL ENABLE DE TODOS LOS TUBOS CUANDO PASE EL TIEMPO 
            tubo1.inputEnabled=false;
            tubo1.input.enableDrag(false);
            tubo2.inputEnabled=false;
            tubo2.input.enableDrag(false);
            codo1.inputEnabled=false;
            codo1.input.enableDrag(false);
            codo2.inputEnabled=false;
            codo2.input.enableDrag(false);
            codo3.inputEnabled=false;
            codo3.input.enableDrag(false);
            codo4.inputEnabled=false;
            codo4.input.enableDrag(false);
          
        
    },
   TEnable: function(){
   // tubo1.inputEnabled=true;
        ///// HABILITAR EL ENABLE DE TODOS LOS TUBOS AL CREARLOS         
           for (i=0; i<tubos.length; i++){

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
            
   },

    
     VerificarUnion:function(tuboArrastrado){
        
    ///// FALTA MODIFICACI0ÓN: CODIGO DE PRUEBA Y GUIA; VERIFICAR SI HAY CERCANIA CON ALGUNO DE LOS TUBOS QUE SE ENCUENTRA EN USO
        
        var tuboAgarre;
        if (cont==0){
          tuboAgarre=salida;
            if ((tuboArrastrado.x>((tuboAgarre.x)+(width/3))) && ((tuboArrastrado.x+tuboArrastrado.width) < (tuboAgarre.x+tuboAgarre.width-(tuboAgarre.width/5))) && ((tuboArrastrado.y>=(tuboAgarre.y+tuboAgarre.height-5)) && (tuboArrastrado.y <= tuboArrastrado.y+tuboAgarre.height+10)))
                {
                tuboArrastrado.x=tuboAgarre.x;
                tuboArrastrado.y=tuboAgarre.y+tuboAgarre.height;
                tuboArrastrado.inputEnabled=false;
                tuboArrastrado.input.enableDrag(false);
                tubosIn.push(tuboArrastrado);
                cont++;
                }     
                else {
                tuboAgarre=tubosIn[tubosIn.lenght-1];
                    if ((tuboArrastrado.x>=(tuboAgarre.x) && ((tuboArrastrado.x+tuboArrastrado.width) <= (tuboAgarre.x+tuboAgarre.width))) && ((tuboArrastrado.y>=(tuboAgarre.y+tuboAgarre.height)) && (tuboArrastrado.y <= tuboAgarre.y+tuboAgarre.height)))
                        {
                        tuboArrastrado.x=tuboAgarre.x;
                        tuboArrastrado.y=tuboAgarre.y+tuboAgarre.height;
                        tuboArrastrado.inputEnabled=false;
                        tuboArrastrado.input.enableDrag(false);
                        tubosIn.push(tuboArrastrado);
                    }   
                }
            
                
                
            }
    },



    update: function(){
	// centro de poder del juego

        
        if (this.tuboArrastrado()!=null){
            console.log("ENTRÉ WEON");
            this.VerificarUnion(this.tuboArrastrado());
        }
       
       
    
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









juego.state.add('inicial', estadoInicial);
juego.state.start('inicial');


