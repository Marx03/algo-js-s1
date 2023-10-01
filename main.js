trajet(array)

const songs = ["Anissa de Wejdene", "Take me to Church de Hozier", "Falling de Trevor Daniel", "You put a spell on me de Austin Giorgio", "My favorite part de Mac Miller & Ariana Grande"]

class Personnage {
    constructor(name, mentalHealth) {
        this.name = name ;
        this.mentalHealth = mentalHealth ;
    }
}

let John = new Personnage("John", 100) 

console.log("John souhaite rentrer chez lui en taxi et 30 feux rouges le séparent de sa maison.")
console.log("Il ne veut plus entendre la chanson Anissa, et on le comprend, et changera donc de taxi si jamais la radio la passe.")

trajet(array) {

    let trafficLight = 30
    let taxi = 1

        while(this.mentalHealth>0 && trafficLight>0) {

            songs[songs.length*Math.random()]
            console.log(random, "La radio diffuse "+songsList[random]+ ".")

            trafficLight --
            console.log("Il reste "+trafficLight+" avant que John ne puisse rentrer chez lui.")

            if(songsList[random] =="Anissa de Wejdene") {
                console.log("La chanson Anissa passe à la radio")
                John.mentalHealth-=1
                console.log("John a perdu de la santé mentale.")
                taxi+=1
                console.log("John change de taxi. C'est dejà le "+taxi+"eme.")
            }

            if(trafficLight==0) {
                console.log("John est finalement rentré. Son esprit est encore viable")
                break
            }

            if(John.mentalHealth==0) {
                console.log("John est devenu fou. Il explose")
            }    
        }
    }