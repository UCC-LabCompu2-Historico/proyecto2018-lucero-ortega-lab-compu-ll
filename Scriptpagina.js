function calculofuerza() { //Cargo lo valores y calculo la fuerza
    var peso = document.getElementById('pesprot').value;
    var ac = document.getElementById('ac').value;
    var n = peso * ac;
    return n;
};

function comprobar() { //Validación de los valores cargados por el usuario
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
};

var mi_intervalo;
var canvas;
var context;

function posibilidades() {  //Con el boton "el sensei dice:" el usuario puede saber el resultado de su golpe
    var pos = calculofuerza();
    if (pos > 200) {
        alert("Las bolsas de entrenamientos son caras... la próxima vez usaremos tu cara.");
    }
    if (pos < 200) {
        alert("¿Eso es lo mejor que puedes hacer? Mi abuela golpea mejor.");
    }
};

var img = []
var villano = new Image(); //Dibujo al villano
for (var i = 0; i < 6; i++) { //Dibujo personaje
    img.push(new Image());
}
villano.src = "Imagenes/Training_Dummy.png";

var img_a_mostrar = 0; //Esto me permite generar la secuencia del movimineto del personaje
var cont = 0;

function iniciar() { //Indico ruta de las imágenes (movimiento secuencial del golpe)
    img[0].src = "Imagenes/secuencia3.PNG";
    img[1].src = "Imagenes/secuencia7.PNG";
    img[2].src = "Imagenes/secuencia9.PNG";
    img[3].src = "Imagenes/secuencia10.PNG";
    img[4].src = "Imagenes/secuencia11.PNG";

    img[0].onload = function () {
        context.drawImage(img[0], 10, 30, 100, 100);
    }
    context.drawImage(villano, 230, 30, 50, 100);
};

window.onload = function () {  //Cuando se carga la pagina, dibujo ambas imagenes a los costados del canvas
    canvas = document.getElementById("dibujo");
    context = canvas.getContext("2d");
    iniciar();
};

function start() {  //Establece el intervalo de la secuencia y la obliga a arrancar
    mi_intervalo = setInterval(img_canvas, 100);
    f = calculofuerza();
    document.getElementById("resultado").textContent = f ;
}

function parar() {   //Reinicia el intervalo cuando ya pasaron todas las imagenes
    clearInterval(mi_intervalo);
};

var x = 0.5;  //Distancia incial del personaje

function img_canvas() {
    cont++;
    if (cont > 14) { //Lazo para formar la secuencia
        parar();
    }
    x += 9; //Distancia que se deszplaca el personaje
    context.drawImage(img[img_a_mostrar], x, 30, 100, 100); //X significa que avanza 0.5 cada vez que muestra la siguiente imagen
    context.drawImage(villano, 230, 30, 50, 100);
    img_a_mostrar++;
    if (img_a_mostrar > 4) {  //Cuando pasan las imagenes, se reinicia la secuencia
        img_a_mostrar = 0;
    }
};

function reinicio(){  //Cuando el usuario intenta de nuevo, se borra el canvas y se dibujan de vuelta los elementos, listos para la nueva secuencia
    context.clearRect(0, 0, canvas.width, canvas.height);
    location.reload(true);
    iniciar();
}

