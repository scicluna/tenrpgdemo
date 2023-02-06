//imports
import { Player } from "./lib/Player.js";
import { initPeace } from "./peace.js"
import { initBattle } from "./battle.js"
import { map } from "./lib/Map.js"

//doms
const gameContainer = document.querySelector(".game-container")
const hpEl = document.querySelector('.hp')
const apEl = document.querySelector('.ap')

//important initial values
export const player = new Player("Player", 10, 1, ["sword","cleave"])
const initialLocation = 0

//gameplay
export const gamePlay = (location) => {
    console.log(player)
    statusUpdate()

    const currentLocation = map[location] 
    updateBackground(currentLocation)
    if(currentLocation.battle === false) initPeace(location)
    if(currentLocation.battle === true) initBattle(location)
}
gamePlay(initialLocation)

//helper function to change the background images
function updateBackground(currentLocation){
    gameContainer.style.backgroundImage = currentLocation.background
}

//helper function to re-render the player hp/ap
function statusUpdate(){
    hpEl.innerText = player.hp
    apEl.innerText = player.ap
}