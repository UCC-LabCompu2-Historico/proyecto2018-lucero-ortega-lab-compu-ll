/**
 * Created by Alumno on 31/05/2018.
 */

function img_canvas() {
    //recojemos el canvas poniendo la id del canvas html5 para relacionarlo
    var canvas = document.getElementById("dibujo");
    //Cojemos la 2D para dibujar en él
    var context = canvas.getContext("2d");
    //creamos la nueva imagen
    var img = new Image();
    //le decimos la ruta de la imagen, en este caso html5.jpg
    img.src = "Imágenes/Villano.jpg";
    //pasamos la imagen al 2d del canvas y se dibujará
    //en 0 0 podemos poner las cordenadas de donde empezar a dibujar la imagen
    context.drawImage(img, 0, 0);
};
