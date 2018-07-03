/**
Descripción: calcula fuerza con los elementos ingresados en el input. 
@method calculofuerza()
@param peso
@param ac
@return entero (n)
*/
function calculofuerza() { 
    var peso = document.getElementById('pesprot').value;
    var ac = document.getElementById('ac').value;
    var n = peso * ac;
    return n;
}
/**
Descripción:validación de los valores cargados por el usuario
@method comprobar()
@param valorp
@param valorac
@return void
*/
function comprobar() { 
    var valorp = document.getElementById("pesprot").value;
    var valorac = document.getElementById("ac").value;
    if (valorp < 0) {  //No acepta peso negativo
        alert('[ERROR] El luchador es demasiado delgado. ¡Lo van a destrozar!');
        return false;
    }
    if (valorac == 0) { //No acepta aceleracion nula
        alert('[ERROR] ¡Muévete,flojo!');
        return false;
    }
    return true;
}

var mi_intervalo;
var canvas;
var context;
/**
Descripción: con el boton "el sensei dice:" el usuario puede saber el resultado de su golpecalcula 
fuerza con los elementos ingresados en el input. 
@method probabilidades()
@param pos
@return void
*/
function posibilidades() {  
    var pos = calculofuerza();
    if (pos > 200) {
        alert("Las bolsas de entrenamientos son caras... la próxima vez usaremos tu cara.");
    }
    if (pos < 200) {
        alert("¿Eso es lo mejor que puedes hacer? Mi abuela golpea mejor.");
    }
}

var img = []
var villano = new Image(); //Dibujo al villano
for (var i = 0; i < 6; i++) { //Dibujo personaje
    img.push(new Image());
}
villano.src = "Imagenes/Training_Dummy.png";

var img_a_mostrar = 0; //Esto me permite generar la secuencia del movimineto del personaje
var cont = 0;
/**
Descripción: indico ruta de las imágenes (movimiento secuencial del golpe).
Cuando se carga la pagina, dibujo ambas imagenes a los costados del canvas
@method iniciar()
@return void
*/
function iniciar() { 
    img[0].src = "Imagenes/secuencia3.PNG";
    img[1].src = "Imagenes/secuencia7.PNG";
    img[2].src = "Imagenes/secuencia9.PNG";
    img[3].src = "Imagenes/secuencia10.PNG";
    img[4].src = "Imagenes/secuencia11.PNG";

    img[0].onload = function () {
        context.drawImage(img[0], 10, 30, 100, 100);
    }
    context.drawImage(villano, 230, 30, 50, 100);
}

window.onload = function () { 
    canvas = document.getElementById("dibujo");
    context = canvas.getContext("2d");
    iniciar();
}
/**
Descripción: establece el intervalo de la secuencia y la obliga a arrancar
@method start()
@param mi_Intervalo
@param f
@return void
*/
function start() {  
    mi_intervalo = setInterval(img_canvas, 100);
    f = calculofuerza();
    document.getElementById("resultado").textContent = f ;
}
/**
Descripción: reinicia el intervalo cuando ya pasaron todas las imagenes
@method parar()
@param mi_Intervalo
@return void
*/
function parar() {   
    clearInterval(mi_intervalo);
}
/**
Descripción:distancia incial del personaje
*/
var x = 0.5; 
/**
Descripción:lazo para formar la secuencia
@method img_canvas()
@param cont
@param x
@param img_a_mostrar
@return void
*/
function img_canvas() {
    cont++;
    if (cont > 14) { 
        parar();
    }
    x += 9; //Distancia que se deszplaca el personaje
    context.drawImage(img[img_a_mostrar], x, 30, 100, 100); //X significa que avanza 0.5 cada vez que muestra la siguiente imagen
    context.drawImage(villano, 230, 30, 50, 100);
    img_a_mostrar++;
    if (img_a_mostrar > 4) {  //Cuando pasan las imagenes, se reinicia la secuencia
        img_a_mostrar = 0;
    }
}
/**
Descripción:cuando el usuario intenta de nuevo, se borra el canvas y se dibujan de vuelta los elementos,
listos para la nueva secuencia. 
@return void
*/
function reinicio(){  //
    context.clearRect(0, 0, canvas.width, canvas.height);
    location.reload(true);
    iniciar();
}

