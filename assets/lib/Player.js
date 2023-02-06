export class Player {

    constructor(name, hp, ap, attacks){
        this.name = name
        this.maxhp = hp
        this.hp = hp
        this.ap = ap
        this.attacks = attacks
        this.combatitems = []
        this.inventory = []
        this.reset()
    }

    reset(){
        this.combatitems = ["potion", "bomb"]
    }

    attacks(){
        return this.attacks
    }

    items(){
        return this.items
    }

}