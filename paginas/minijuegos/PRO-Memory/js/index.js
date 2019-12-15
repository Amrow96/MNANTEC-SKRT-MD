//#region Variables Globals
var moviments = document.getElementById("moviments");
var torn = 0;
numeroParelles = 0;
var colorPrincipal = "#428BCA";
var colorContingutCarta = "#fefefe";
//#endregion

//#region Datos
var dades =
  '{ "Tarjetes" : [' +
  //'{ "name":"Codificador de Radio" , "image":"Transmisor", "info":"Serveix per transformar les ones digitals a frequencia de radio" },' +
  //'{ "name":"Microfon" , "image":"Microfono", "info":"Enregistra les freuquencies de só" },' +
  //'{ "name":"Cable" , "image":"Cable", "info":"Ens serveix per interconectar tots els elements" },' +
  '{ "name":"Antena" , "image":"TorreRadio", "info":"Augmenta la senyal de radio" },' +
  '{ "name":"Taula de so" , "image":"MesaSonido", "info":"Permet ajustar els volums dels nostres audios" } ]}';
//#endregion

//#region Objectes
var Escenari = {
  element: document.getElementById("escenari"),
  width: 1800,
  //600
  height: 1200,
  //400 factor x5
  initialize: function() {
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    document.body.appendChild(this.element);
  }
};

var Carta = {
  create: function(dx, dy) {
    var novaTarja = Object.create(this);
    //Posició
    novaTarja.dx = dx;
    novaTarja.dy = dy;
    //Dimensións
    novaTarja.width = 210; //70
    novaTarja.height = 300; //100 factor x5
    //Afegim els valors a la etiqueta
    novaTarja.element = document.createElement("div");
    novaTarja.element.style.backgroundColor = colorPrincipal;
    novaTarja.element.className += " carta";
    //Apliquem els estils que tenim guardats com a atributs.
    novaTarja.element.style.width = novaTarja.width + "px";
    novaTarja.element.style.height = novaTarja.height + "px";

    //Afegim el element al escenario
    Escenari.element.appendChild(novaTarja.element);
    return novaTarja;
  },

  moveTo: function(x, y) {
    this.element.style.left = x + "px";
    this.element.style.top = y + "px";
  },

  changeDirectionIfNecessary: function(x, y) {
    if (x < 0 || x > Escenari.width - this.width) {
      this.dx = -this.dx;
    }

    if (y < 0 || y > Escenari.height - this.height) {
      this.dy = -this.dy;
    }
  },

  draw: function(x, y) {
    this.moveTo(x, y);
    var ball = this;

    setTimeout(
      function() {
        ball.changeDirectionIfNecessary(x, y);
        ball.draw(x + ball.dx, y + ball.dy);
      },

      1000 / 60
    );
  }
};

//#endregion

//Creem el element i el pintem al escenari
var creadorDeCartes = function(nom, imatge, info) {
  //Generem una carta random forçant-la a que es mogui (+1) i assignant-li una velocitat
  var velocitatMinima = 1;
  var velocitatMaxima = 7;
  var card1 = Carta.create(
    parseInt(Math.random() * velocitatMaxima) + velocitatMinima,
    parseInt(Math.random() * velocitatMaxima) + velocitatMinima
  );

  //Afegim les etiquetes data que seràn: el nom del arxiu d'imatge, el nom que la representa i la descripció d'aquesta.
  card1.element.dataset.imatge = imatge;
  card1.element.dataset.nom = nom;
  card1.element.dataset.info = info;
  card1.element.dataset.estat = "dorsal";
  card1.element.style.backgroundImage = "url('/PRO-Memory/media/BackCard.svg')";

  //Dibuixem els elements dins del Escenario assegurant-nos de que no es pintaran a mig camí
  var altura = Escenari.height - card1.height;
  var amplada = Escenari.width - card1.width;

  card1.draw(
    parseInt(Math.random() * amplada),
    parseInt(Math.random() * altura)
  );
};

//#region Metodes Simples
function suma() {
  var numero = moviments.textContent;
  numero++;
  moviments.textContent = numero;
}

//Metode per barrejar els elements d'un array
var shuffle = function shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  //Agafem  el ultim valor (I) i el posem en una temporal X, despres agafem el valor de la posició random (J) i l'assignem al 		ultim i continuem amb el penultim, i aixi amb tot el array
  return o;
};

function mostrarEsquenaCarta(carta) {
  carta.dataset.estat = "dorsal";
  carta.style.backgroundColor = colorPrincipal;
  carta.style.backgroundImage = "url('/PRO-Memory/media/BackCard.svg')";
}

function mostrarContingutCarta(carta) {
  carta.dataset.estat = "frontal";
  carta.style.backgroundColor = colorContingutCarta;
  carta.style.backgroundImage =
    "url('/PRO-Memory/media/" + carta.dataset.imatge + ".svg')";
}

//#endregion

function start() {
  //Seleccionem totes les tarjetes i els afegim el click
  var tarjetas = document.querySelectorAll(".carta");

  tarjetas.forEach(function(elem) {
    elem.addEventListener("click", flip);
  });

  //Evitem que es pugi clicar mes de dues tarjetes ala vegada
  //Dispararem la animació que fara que giri
  function flip() {
    if (torn < 2) {
      //Mirem que la carta estigui girada
      if (this.dataset.estat === "dorsal") {
        //Afegir un timeout perque la tarjeta pari
        torn++;
        mostrarContingutCarta(this);
      } else if (this.dataset.estat === "frontal") {
        mostrarEsquenaCarta(this);
      }

      setTimeout(
        function comparacioCartes(params) {
          if (torn === 2) {
            var girades = document.querySelectorAll("[data-estat='frontal']");

            if (girades[0].dataset.nom === girades[1].dataset.nom) {
              //Eliminem les tarjetes del escenari
              var parent = document.getElementById("escenari");
              var nested = girades[0];
              //Afegim una de les dues tarjetes a la part de trofeus
              var foto = document.getElementById("foto");
              var texto = document.getElementById("text");
              foto.style.height = "300px";
              foto.style.width = "300px";
              foto.style.padding = "5%";
              texto.style.padding = "5%";

              foto.style.backgroundImage =
                "url('/PRO-Memory/media/" + nested.dataset.imatge + ".svg')";
              texto.textContent = nested.dataset.info;

              var paperera = parent.removeChild(nested);
              nested = girades[1];
              paperera = parent.removeChild(nested);
            } else {
              //Contador perque només s'activia un cop haguem fet el segon click
              //Ens esperem a que es mostri la imatge 3s i despres la girem
              mostrarEsquenaCarta(girades[1]);
              mostrarEsquenaCarta(girades[0]);
            }
            var numeros = document.getElementById("escenari").childElementCount;
            if (numeros == 0) {
              var txt;
              var jugades = moviments.textContent;
              var resultat = (numeroParelles / jugades.valueOf) * 10;
              if (confirm("Has guanyat, amb una puntuació de: " + resultat)) {
                txt = "Tornar a començar!"; //Resetejem el joc
                init();
                foto.style.backgroundImage = "";
                texto.textContent = "";
              } else {
                txt = "You pressed Cancel!"; //No fem res
              }
            }

            suma();
            torn = 0;
          }
        },

        3000
      );
    }
  }
}

//Programa principal
function init() {
  //Posem el contador a 0
  moviments.textContent = 0;

  //Inicialitzem el mapa

  var info = JSON.parse(dades);
  numeroParelles = info.Tarjetes.length;
  var newSet = info.Tarjetes; //Agafem els valor del array
  newSet = newSet.concat(newSet); //Dupliquem els valors per tenir la parella
  newSet = shuffle(newSet); //Barrejem els elements perque no estiguin junts

  //Creem els elements al tablero
  for (var index in newSet) {
    var nombre = newSet[index].name;
    var imagen = newSet[index].image;
    var info = newSet[index].info;
    creadorDeCartes(nombre, imagen, info);
  }

  //Funcionalitat de click i de comparació
  start();
}

//Executem el programa
Escenari.initialize();
init();
