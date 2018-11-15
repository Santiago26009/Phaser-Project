var juego = new Phaser.Game(920, 530, Phaser.CANVAS, 'game');
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
    var boton2 = this.add.button(725, 425, 'done', this.juegoTerminado, this);
    var x1 = juego.rnd.integerInRange(275, 490);
    var x2 = juego.rnd.integerInRange(200, 597); 
    tubo1 = juego.add.tileSprite(750, 135, 22, 76, 'tubo1');
    tubo1.events.onInputDown.add(this.repintart1);
    tubo2 = juego.add.tileSprite(805, 135, 76, 22, 'tubo2');
    tubo2.events.onInputDown.add(this.repintart2);
    codo1 = juego.add.tileSprite(750, 250, 34, 38, 'codo1');
    codo1.events.onInputDown.add(this.repintarc1);
    codo2 = juego.add.tileSprite(795, 180, 38, 34, 'codo2');
    codo2.events.onInputDown.add(this.repintarc2);
    codo3 = juego.add.tileSprite(865, 180, 34, 38, 'codo3');
    codo3.events.onInputDown.add(this.repintarc3);
    codo4 = juego.add.tileSprite(820, 250, 38, 34, 'codo4');
    codo4.events.onInputDown.add(this.repintarc4);
    salida = juego.add.tileSprite(x1, 7, 106, 98, 'salida');
    llegada = juego.add.tileSprite(x2, 431, 106, 98, 'llegada');
    timer = juego.add.text(105, 45, juego.time.now);
    tubos = [tubo1, tubo2, codo1, codo2, codo3, codo4];
    tubosIn=[tubo1];
    tubosEnable = [false, false, false, false, false, false];
    cont=0;
    this.TEnable();
    },

    reiniciarJuego: function () {
        juego.state.add('inicial', estadoInicial);
        juego.state.start('inicial');         
    },

    tuboArrastrado: function(){
        for (var i=0; i<tubos.length; i++){
            if ((juego.input.mousePointer.x>=tubos[i].x) && (juego.input.mousePointer.x<=tubos[i].x+tubos[i].width) && (juego.input.mousePointer.y>=tubos[i].y) && (juego.input.mousePointer.y<=tubos[i].y+tubos[i].height)) 
            {
                this.TubosEnableU(i);
                return tubos[i];
            }
        }
        return null
    },

    TubosEnableU: function(i){
        if (i==0){
            tubosEnable[0]=true;
            tubosEnable[1]=false;
            tubosEnable[2]=true;
            tubosEnable[3]=false;
            tubosEnable[4]=true;
            tubosEnable[5]=true;

        }
        if (i==1){

            tubosEnable[0]=false;
            tubosEnable[1]=true;
            tubosEnable[2]=true;
            tubosEnable[3]=true;
            tubosEnable[4]=true;
            tubosEnable[5]=false;

        }

         if (i==2){

            tubosEnable[0]=true;
            tubosEnable[1]=false;
            tubosEnable[2]=false;
            tubosEnable[3]=true;
            tubosEnable[4]=true;
            tubosEnable[5]=false;

        }


        if (i==3){

            tubosEnable[0]=false;
            tubosEnable[1]=true;
            tubosEnable[2]=false;
            tubosEnable[3]=false;
            tubosEnable[4]=false;
            tubosEnable[5]=true;

        }

        if (i==4){

            tubosEnable[0]=true;
            tubosEnable[1]=true;
            tubosEnable[2]=true;
            tubosEnable[3]=false;
            tubosEnable[4]=false;
            tubosEnable[5]=false;

        }
        if (i==5){

            tubosEnable[0]=true;
            tubosEnable[1]=false;
            tubosEnable[2]=false;
            tubosEnable[3]=true;
            tubosEnable[4]=true;
            tubosEnable[5]=false;

        }

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
    },

    repintart1: function(){
        tubo1 = juego.add.tileSprite(750, 135, 22, 76, 'tubo1');
        tubo1.inputEnabled=true;
        tubo1.input.enableDrag(true);
        tubos.push(tubo1);          
    },
    repintart2: function(){
        tubo2 = juego.add.tileSprite(805, 135, 76, 22, 'tubo2');
        tubo2.inputEnabled=true;
        tubo2.input.enableDrag(true);
        tubos.push(tubo2);
    },
    repintarc1: function(){
        codo1 = juego.add.tileSprite(750, 250, 34, 38, 'codo1');
        codo1.inputEnabled=true;
        codo1.input.enableDrag(true);
        tubos.push(codo1);
    },
    repintarc2: function(){
        codo2 = juego.add.tileSprite(795, 180, 38, 34, 'codo2');
        codo2.inputEnabled=true;
        codo2.input.enableDrag(true);
        tubos.push(codo2);
    },
    repintarc3: function(){
        codo3 = juego.add.tileSprite(865, 180, 34, 38, 'codo3');
        codo3.inputEnabled=true;
        codo3.input.enableDrag(true);
        tubos.push(codo3);
    },
    repintarc4: function(){
        codo4 = juego.add.tileSprite(820, 250, 38, 34, 'codo4');
        codo4.inputEnabled=true;
        codo4.input.enableDrag(true); 
        tubos.push(codo4);
    },
    
    ObtenerT: function(tubosIn){
        for (var i =  0; i < tubos.length; i++) {
            if (tubosIn[tubosIn.length-1].key==tubos[i].key){
                return i;

            }
        }

    },

    VerificarUnion:function(tuboArrastrado){       
    ///// FALTA MODIFICACIÓN: CODIGO DE PRUEBA Y GUIA; VERIFICAR SI HAY CERCANIA CON ALGUNO DE LOS TUBOS QUE SE ENCUENTRA EN USO
        var tuboAgarre;
        if (this.game.input.mousePointer.isDown){

            
       
        if (cont==0){
          tuboAgarre=salida;
            if ((tuboArrastrado.x>((tuboAgarre.x)+(tuboAgarre.width)-5)) && ((tuboArrastrado.x+tuboArrastrado.width) <= ((tuboAgarre.x+tuboAgarre.width)+(tuboArrastrado.width+12))) && ((tuboArrastrado.y>=(tuboAgarre.y+tuboAgarre.height*2/5 +5)) && (tuboArrastrado.y <= (tuboAgarre.y+tuboAgarre.height+5))))
                {
                tuboArrastrado.x=tuboAgarre.x+tuboAgarre.width - 5;
                tuboArrastrado.y=tuboAgarre.y+tuboAgarre.height*3/5 - 7;
                tuboArrastrado.inputEnabled=false;
                tuboArrastrado.input.enableDrag(false);
                tubosIn.push(tuboArrastrado);
                tubos.push(tuboArrastrado);
                cont++;
            } 
        }else {
            var i= this.ObtenerT(tubosIn);
            tuboAgarre=tubosIn[tubosIn.length-1];
            if ((tuboArrastrado.x-8 <= (tuboAgarre.x)) && ((tuboArrastrado.x + tuboArrastrado.width+8) >= (tuboAgarre.x+tuboAgarre.width)) && (tuboArrastrado.y+5>=(tuboAgarre.y+tuboAgarre.height-3)) && (tuboArrastrado.y <= (tuboAgarre.y+tuboAgarre.height+tuboArrastrado.width + 5)) && tubosEnable[i])
                {
                tuboArrastrado.x=tuboAgarre.x + 1.5;
                tuboArrastrado.y=tuboAgarre.y+tuboAgarre.height;
                tuboArrastrado.inputEnabled=false;
                tuboArrastrado.input.enableDrag(false);
                tubosIn.push(tuboArrastrado);
                }else {

       
                    

                    if ((tuboArrastrado.x+5>((tuboAgarre.x)+(tuboAgarre.width)-3)) && ((tuboArrastrado.x+tuboArrastrado.width) <= ((tuboArrastrado.x)+(tuboArrastrado.width+8))) && (tuboArrastrado.y<=(tuboAgarre.y+tuboAgarre.y/2+3)) && (tuboArrastrado.y+tuboArrastrado.height >= (tuboAgarre.y+tuboAgarre.height-3))&& tubosEnable[i])
                        {
                        tuboArrastrado.x=tuboAgarre.x+tuboAgarre.width;
                        tuboArrastrado.y=tuboAgarre.y+tuboAgarre.height/2-8;
                        tuboArrastrado.inputEnabled=false;
                        tuboArrastrado.input.enableDrag(false);
                        tubosIn.push(tuboArrastrado);
                    }else {
                        if ((tuboArrastrado.x+tuboArrastrado.width-5) < (tuboAgarre.x+5) && ((tuboArrastrado.x) >= ((tuboArrastrado.x-8))) && (tuboArrastrado.y-4<=(tuboAgarre.y)) && (tuboArrastrado.y >= (tuboAgarre.y+tuboAgarre.height))&& tubosEnable[i])
                            {
                            tuboArrastrado.x=tuboAgarre.x - tuboArrastrado.width;
                            tuboArrastrado.y=tuboAgarre.y+tuboAgarre.height/2-8;
                            tuboArrastrado.inputEnabled=false;
                            tuboArrastrado.input.enableDrag(false);
                            tubosIn.push(tuboArrastrado);
                        }
                    }
                }
            }  }     
        },

    update: function(){
        
        if (this.tuboArrastrado()!=null){
            this.VerificarUnion(this.tuboArrastrado());
        }
        if ((juego.time.now-time+1)<30007){
            timer.text = (juego.time.now-time)/1000; 
        }else{
            this.TNoEnable();
            this.juegoTerminado();
        }
    },

    juegoTerminado: function(){
        this.TNoEnable();
        timer.kill();
        var x;  
        if (x==1){
            juego.state.add('estadoCuatro', estadoCuatro);
            juego.state.start('estadoCuatro');
        }
        if(x==0){
            juego.state.add('estadoTres', estadoTres);
            juego.state.start('estadoTres');
        }
    },
};

var estadoTres = {

    preload: function(){
        juego.load.image('fondo', 'imagenes/GameOver.png');
        juego.load.image('reiniciar', 'imagenes/Restart1.png');

    },

    create: function(){
        background = juego.add.tileSprite(0, 0, 920, 530, 'fondo');
        var boton3 = this.add.button(0, 450, 'reiniciar', this.reiniciarJuego, this);

    },

    update: function(){

    },

    reiniciarJuego: function () {
        juego.state.add('inicial', estadoInicial);
        juego.state.start('inicial');         
    },

};

var estadoCuatro = {

    preload: function(){
        juego.load.image('fondo', 'imagenes/WellDone.png');
        juego.load.image('reiniciar', 'imagenes/Restart1.png');


    },

    create: function(){
        background = juego.add.tileSprite(0, 0, 920, 530, 'fondo');
        var boton4 = this.add.button(0, 450, 'reiniciar', this.reiniciarJuego, this);

    },

    update: function(){

    },

    reiniciarJuego: function () {
        juego.state.add('inicial', estadoInicial);
        juego.state.start('inicial');         
    },

};

juego.state.add('inicial', estadoInicial);
juego.state.start('inicial');
