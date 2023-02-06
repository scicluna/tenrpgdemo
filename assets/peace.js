import { player, gamePlay } from "./script.js"
import { map } from "./lib/Map.js"

const peaceContainer = document.querySelector(".peace-container")
const battleContainer = document.querySelector(".battle-container")
const textEl = document.querySelector('.text')
const btnContainerEl = document.querySelector(".buttongrid")

//Initializes a peace screen
export function initPeace(location){

    peaceContainer.classList.remove("hide")
    battleContainer.classList.add("hide")

    const currentLocation = map[location]
    textEl.innerText = currentLocation.desc

    btnContainerEl.innerHTML = ""
    currentLocation.options.forEach(op => {
        if(optionAvailable(op)){
        let newBtn = document.createElement("button")
        newBtn.innerText = op.txt
        newBtn.addEventListener("click", (e) =>{
            handlePeace(e, op)
        })
        btnContainerEl.append(newBtn)
    }
    })
}

function optionAvailable(op){
    if (op.requirement && op.requirement() === false){
        return false
    } 
    return true
}

function handlePeace(e, op){
    e.preventDefault()
    if (op.action) op.action()
    gamePlay(op.destination)
} 


 