var info =
  '{ "Diapositivas" : [' +
  '{ "name":"Emisió" , "image":"emisio.png", "textos":[{"parrafada":""},{"parrafada":""},{"parrafada":""}] },' +
  '{ "name":"Emisió" , "image":"transmisio.png", "textos":[{"parrafada":""},{"parrafada":""},{"parrafada":""}] },' +
  '{ "name":"Emisió" , "image":"recepcio.png", "textos":[{"parrafada":""},{"parrafada":""},{"parrafada":""}] } ]}';

var json = JSON.parse(info);
var dades = json.Diapositivas;
var posicio = 0;

//Capturem els elements del html i els inicialitzem
var interlocutor = document.getElementById("guia");
var botoEnrere = document.getElementById("atras");
var image = document.getElementById("imatge");
var botoEndevant = document.getElementById("adelante");

//Assignem les imatges als
interlocutor.style.backgroundImage = "./../img/interlocutor.png";
botoEndevant.style.backgroundImage = "./../img/alante.png";
botoEnrere.style.backgroundImage = "./../img/atras.png";
image.style.backgroundImage = "./../img/interlocutor.png"; //TODO: Posar la imatge d'emisió

//Creem els clicks de <- i ->
botoEnrere.addEventListener("click", function retroceder() {
  if (posicio == 0) {
    //Controlem que no s'escapi dels limits
    posicio = dades.length;
  } else {
    posicio--;
  }
  loadImage(dades[posicio]);
});

botoEndevant.addEventListener("click", function avanzar() {
  if (posicio == dades.length) {
    //Controlem que no s'escapi dels limits
    posicio = 0;
  } else {
    posicio++;
  }
  loadImage(dades[posicio]);
});

function loadImage(element) {
  image.style.backgroundImage = element;
  //Capturem en un array els textos que tingui i els mostrem amb un retard de 10s
  var textos = element.textos;
  textos.forEach(diapo => {
    talk(diapo.parrafada);
    setTimeout(eliminarText(), 10000);
  });
}

function talk(text) {
  //Creem un fill al intelocutor que ens mostri un text
  interlocutor.append("<p>" + text + "</p>");
}

function eliminarText() {
  //Eliminem el fill creat
  interlocutor.removeChild(interlocutor.firstChild());
}
