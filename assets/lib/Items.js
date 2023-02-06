import { monsters } from "./Monster.js"
import { player } from "../script.js"
import { currentMonsters, actionAnimation } from "../battle.js"

export let aoeItem=false

export const itemLibrary = {
    potion: (player)=>{

        let damage = -10

        if(player.hp+10 > player.maxhp){
            damage = player.hp-player.maxhp
            player.hp = player.maxhp
        } else player.hp -= damage

        actionAnimation(player, damage)
    },
    bomb: ()=>{
        monsters[currentMonsters].forEach(monster=>{
            aoeItem = true
            let damage = 5
            monster.hp -= damage
            actionAnimation(monster, damage)
            aoeItem = false
        })
    }
}