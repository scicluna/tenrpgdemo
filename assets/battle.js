//imports
import { player } from "./script.js"
import { map } from "./lib/Map.js"
import { monsters } from "./lib/Monster.js"

//doms
const playerHP = document.getElementById("playerhp")
const playerOptions = document.getElementById("playeroptions")
const playerItems = document.getElementById("playeritems")
const monsterHPContainer = document.querySelectorAll(".monsterhpcontainer")
const monsterHP = document.querySelectorAll("#monsterhp")
const peaceContainer = document.querySelector(".peace-container")
const battleContainer = document.querySelector(".battle-container")


export function initBattle(location){
    peaceContainer.classList.add("hide")
    battleContainer.classList.remove("hide")

    const currentLocation = map[location]


}