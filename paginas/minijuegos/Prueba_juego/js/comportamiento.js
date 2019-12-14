//Parejas: {cl1, cr3}, {cl2, cr1}, {cl3, cr4}, {cl4, cr2}
var seleccionado1;
var seleccionado2;
var parejasUnidas = 0;
var continuar = true;

function selected(id){
    if (continuar == true){
        seleccionado1 = document.getElementById(id);
        seleccionado1.style.backgroundImage = "url('img/newprueba2.png')";
        continuar = false;
    }
};

function comprobar(id2){
    if (continuar == false){
        seleccionado2 = document.getElementById(id2);
        seleccionado2.style.backgroundImage = "url('img/newpruebainverted2.png')";

        var pareja = seleccionado1.getAttribute("id");

        if (id2 == 'cr3' && pareja == 'cl1'){
            document.getElementById('info').innerHTML = "Unión correcta.";
            parejasUnidas++;

            comprobarFin();
        }
        else if(id2 == 'cr1' && pareja == 'cl2'){
            document.getElementById('info').innerHTML = "Unión correcta";
            parejasUnidas++;

            comprobarFin();
        }
        else if(id2 == 'cr2' && pareja == 'cl4'){
            document.getElementById('info').innerHTML = "Unión correcta";
            parejasUnidas++;

            comprobarFin();
        }
        else if(id2 == 'cr4' && pareja == 'cl3'){
            document.getElementById('info').innerHTML = "Unión correcta";
            parejasUnidas++;

            comprobarFin();
        }
        else{
            document.getElementById('info').innerHTML = "Unión incorrecta, vuelve a intentarlo!";
            document.getElementById('mensajes').innerHTML = "";
            reset();
        }

        continuar = true;
    }
}

function reset(){
    cl1.style.backgroundImage = "url('img/newprueba.png')";
    cl2.style.backgroundImage = "url('img/newprueba.png')";
    cl3.style.backgroundImage = "url('img/newprueba.png')";
    cl4.style.backgroundImage = "url('img/newprueba.png')";
    cr1.style.backgroundImage = "url('img/newpruebainverted.png')";
    cr2.style.backgroundImage = "url('img/newpruebainverted.png')";
    cr3.style.backgroundImage = "url('img/newpruebainverted.png')";
    cr4.style.backgroundImage = "url('img/newpruebainverted.png')";

    parejasUnidas = 0;
}

function comprobarFin(){
    if (parejasUnidas == 4){
        document.getElementById('info').innerHTML = "";
        document.getElementById('mensajes').innerHTML = "¡Felicidades, has contectado todos los cables!";
        document.getElementById('pop-up').style.display = 'inherit';
        document.getElementById('replay').addEventListener("click", function() {
            document.location.reload();
        })

        document.getElementById('menu').addEventListener("click", function() {
            //volver al menú
        })
    }
}