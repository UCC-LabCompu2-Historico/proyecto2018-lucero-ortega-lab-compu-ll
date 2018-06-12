


function aviso() {
    alert("Pegale mas fuerte");

}

// Draw dummy
var img =[
    new Image(),
    new Image(),
];

//le decimos la ruta de la imagen, en este caso html5.jpg
img[0].src = "Imágenes/secuencia1.png";
img[1].src = "Imágenes/";

//pasamos la imagen al 2d del canvas y se dibujará
//en 0 0 podemos poner las cordenadas de donde empezar a dibujar la imagen
//       dummy_img.onload = function() {
//           // x, y, width, height
//           context.drawImage(dummy_img, 30, 30, 70, 90);
//       };

//le decimos la ruta de la imagen, en este caso html5.jpg
img[1].src = "Imágenes/1.png";
//pasamos la imagen al 2d del canvas y se dibujará
//en 0 0 podemos poner las cordenadas de donde empezar a dibujar la imagen
//       tai_lung_img.onload = function() {
//           // x, y, width, height
//           context.drawImage(tai_lung_img, 160, 30, 100, 80);
//       };

var canvas = document.getElementById("dibujo");
var context = canvas.getContext("2d");
var img_a_mostrar = 0;
var cont = 0;
function img_canvas() {

    cont++;
    if(cont > 5)
        parar();
    context.drawImage(img[img_a_mostrar], 30, 30,100,100);
    img_a_mostrar++;
    if(img_a_mostrar>1)
        img_a_mostrar=0;
}

var mi_intervalo = setInterval(img_canvas,1000);

function parar() {
    clearInterval(mi_intervalo);
}
