//#region Datos
var dades =
  '{ "Tarjetes" : [' +
  '{ "name":"Codificador de Radio" , "image":"Transmisor", "info":"Serveix per transformar les ones digitals a frequencia de radio" },' +
  '{ "name":"Microfon" , "image":"Microfono", "info":"Enregistra les freuquencies de só" },' +
  '{ "name":"Cable" , "image":"Cable", "info":"Ens serveix per interconectar tots els elements" },' +
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
