import { player } from "../script.js"

//DOMS
const gameContainer = document.querySelector(".game-container")
const itemAcquire = document.querySelector(".item-acquire")
const itemText = document.querySelector(".item-text")

//background URLs
const forest = 'url(./assets/imgs/backgrounds/forest.jpg)'
const plains = 'url(./assets/imgs/backgrounds/plains.jpg)'
const coast = 'url(./assets/imgs/backgrounds/coast.jpg)'
const cliffs = 'url(./assets/imgs/backgrounds/cliffs.jpg)'

export const map = [
    {
        name: "Tutorial 1",
        location: 0,
        background: forest,
        battle: false,
        encounter: null,
        desc: "Welcome! This is a tutorial placeholder!!! I hope this game is self-explanatory enough, but I'll definitely add an explanation later",
        options:[
            {
                op: 0,
                txt:"Buy an old shield",
                destination: 1,
                action: function(){
                    const item = "old shield"
                    acquireItem(item)
                    player.ap++
                }
            },
            {
                op: 1,
                txt:"Buy extra rations",
                destination: 1,
                action: function(){
                    const item = "rations"
                    acquireItem(item)
                }
            },
            {
                op: 2,
                txt:"Buy a grappling hook",
                destination: 1,
                action: function(){
                    const item = "grappling hook"
                    acquireItem(item)
                }
            },
            {
                op: 3,
                txt:"Buy a shovel",
                destination: 1,
                action: function(){
                    const item = "shovel"
                    acquireItem(item)
                },
                requirement: function(){return player.inventory.includes("old shield")}
            },
         ],
    },
    {
        name: "Tutorial Battle 1",
        location: 0,
        background: forest,
        battle: true,
        encounter: 0,
    }
]

function acquireItem(item){
    player.inventory = [...player.inventory, item]
    gameContainer.classList.add("fade")
    itemAcquire.classList.remove("hide")
    document.addEventListener("keyup", removeModal)
    itemText.innerText = `You have acquired the ${item}
    
    
    
    
    






    Press space to continue`
}

function removeModal(e){
    e.preventDefault()
    if (e.key === " ") {
        gameContainer.classList.remove("fade")
        itemAcquire.classList.add("hide")
        document.removeEventListener("keyup", removeModal)
    }
} 