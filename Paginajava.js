/**
 * Created by Alumno on 31/05/2018.
 */

function pasarValor() {
    var el = document.getElementById("formValores").elements;
    var urlVar = 'Tercerapag.html#' + el["vel_valor"].value + "#" + el["vel_unidad"].value + "#"
                                    + el["peso_valor"].value + "#" + el["peso_unidad"].value + "#"
                                    + el["pes_valor"].value + "#" + el["pes_unidad"].value;

    window.location.assign(urlVar);
}

function cargarValor() {
    var elArray = window.location.hash.split('#');

    var vel_valor = elArray[1];
    var vel_unidad = elArray[2];
    var peso_valor = elArray[3];
    var peso_unidad = elArray[4];
    var pes_valor = elArray[5];
    var pes_unidad = elArray[6];

    //Realizar algún cálculo o mostrar los datos en la página
}

function img_canvas() {
    //creamos la nueva imagen
    var image = new Image();
    image.onload = function() {
        //Recojemos el canvas poniendo la id del canvas html5 para relacionarlo
        var canvas = document.getElementById('dibujo');
        //Cojemos la 2D para dibujar en él
        var context = canvas.getContext('2d');
        //en 0 0 podemos poner las cordenadas de donde empezar a dibujar la imagen
        context.drawImage(this, 0, 0, 100, 100);
    }
    //le decimos la ruta de la imagen, en este caso html5.jpg
    image.src = 'Imágenes/Villano.jpg';
}

function aviso() {
    alert("Pegale mas fuerte");

}