class Pokemon {
    constructor(name, dmg, def, hp, luck) {
        this.name = name
        this.dmg = dmg
        this.def = def
        this.hp = hp
        this.luck = luck
}
}

isLucky() {
        if (laLuck <= Pokemon.luck) {
            return true
        } else {
        return false
    }
}
    
attackPokemon() {
        if(laLuck >= 0) {
            giratina.hp -= betaArceus.dmg
        }
        
        if(laLuck <= 0) {
            betaArceus.hp -= giratina.dmg
            break
        }
}

let betaArceus = new Pokemon("BetaArceus", 10000, 100, 120, 0.5)
let giratina = new Pokemon("Giratina", 15000, 100, 150, 0.5)

var laLuck = Math.random()
var sentenceQuandGiratinaTueArceus = "Une attaque de G inflige " + giratina.dmg + " points de dégats."
var sentenceQuandArceusTueGiratina = "Arceus inflige violemment " + betaArceus.dmg + " points de dégats à Giratina"

console.log(betaArceus)
console.log(giratina)

console.log("Beta Arceus et Giratina vont se battre")

while(betaArceus.hp >= 0 && giratina.hp >= 0) {

    console.log("Beta Arceus a 120 PV.")
    console.log("G est a 150 PV.")
    
if(laLuck >= 0) {
        console.log(sentenceQuandArceusTueGiratina)
        console.log(attackPokemon)
        console.log("Les PV de Giratina sont trop bas. Une lumière dorée resplendit. Le créateur a triomphé.")
        break
    }
        
if(laLuck <= 0) {
            console.log(sentenceQuandGiratinaTueArceus)
            console.log(attackPokemon)
            console.log("Beta Arceus a perdu. Le chaos est plus puissant. G règne en maitre.")
            break
        }
}