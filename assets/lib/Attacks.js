import { monsters } from "./monster.js"
import { player } from "../script.js"
import { currentMonsters, actionAnimation} from "../battle.js"

export let aoeAttack=false

export const attackLibrary = 
{
    sword: (target)=>{
        let damage = 5 - (target.armor || 0)
        target.hp -= damage
        actionAnimation(target, damage)
    },
    testsword: (target)=>{
        let damage = 15 - (target.ap || 0)
        target.hp -= damage
        actionAnimation(target, damage)
    },
    bite: (target)=>{
        let damage = 3 - (target.ap || 0)
        target.hp -= damage
        actionAnimation(target, damage)
    },
    slam: (target)=>{
        console.log(target)
        let damage = 2 - (target.ap || 0)
        target.hp -= damage
        actionAnimation(target, damage)
    },
    claw: (target)=>{
        let damage = 2 - (target.ap || 0)
        target.hp -= damage
        actionAnimation(target, damage)
    },
    cleave: ()=>{
        monsters[currentMonsters].forEach(monster=>{
            aoeAttack = true
            let damage = 2 - (target.ap || 0)
            monster.hp -= damage
            actionAnimation(monster, damage)
            aoeAttack = false
        })
    }
}
