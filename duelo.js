
class Card {
    constructor(nombre, costo, poder, resiliencia) {
      this.nombre = nombre;
      this.costo = costo;
      this.poder = poder;
      this.resiliencia = resiliencia;
    }
  }
  class Unit extends Card {
      constructor (nombre, costo, poder, resiliencia){
        super(nombre, costo);
        this.poder = poder;
        this.resiliencia = resiliencia;
      }
      attack (target){
    target.resiliencia += this.poder;
        }
       stats(){
           console.log(`${this.nombre}, ${this.costo}, ${this.poder}, ${this.resiliencia}`);
       }
    }
      
  class Effect extends Card{
    constructor(nombre, costo, texto, stats, magnitud) {
        super(nombre, costo);
        this.texto = texto;
        this.stats = stats;
        this.magnitud = magnitud;
      }
      jugada(target) {
            if( target instanceof Unit ) {
                console.log(this.texto);
            target.resiliencia -= this.magnitud;
            } else {
                throw new Error( "Target must be a unit!" );
            }
    }
        jugada2(target) {
            if (target instanceof Unit) {
              console.log(this.texto);
              target.poder += this.magnitud;
            } else {
              throw new Error("Target must be a unit!");
            }
          }
       

  }

  const jugador1 = new Unit ("Ninja Cinturon Rojo",3 ,3, 4);
  const jugador2 = new Unit ("Ninja Cinturón Negro", 4, 5, 4);
  const algoritmoDificil = new Effect ("Algoritmo Difícil", 2, "aumentar la resistencia del objetivo en 3",	"Resiliencia", 3);
  const rechazoDePromesanoMAnejado = new Effect ("Rechazo de promesa no manejado", 1, "reducir la resistencia del objetivo en 2", "Resiliencia", 2);
  const programacionEnPareja = new Effect ("Programación en pareja", 3,	"aumentar el poder del objetivo en 2", "poder", 2);

  console.log("ASí EMPIEZA EL JUEGO...");
  jugador1.stats();
  jugador2.stats();

  console.log("RECHAZO DE PROMESA NO MANEJADO...ALGUIEN SE VA DEBILITANDO...");
  rechazoDePromesanoMAnejado.jugada(jugador1);
  jugador1.stats();

  console.log("EL NINJA CINTURON ROJO SE JUEGA SU ÚLTIMA CARTA PARA INTENTAR GANAR ESTA BATALLA...");
  programacionEnPareja.jugada2(jugador1);
  jugador1.stats();

  console.log("NINJA CINTURON ROJO, LO INTENTO PERO NO LO LOGRO.");
  console.table({jugador2, jugador1})
  
  
 

  

