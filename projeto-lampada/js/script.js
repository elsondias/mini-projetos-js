const turnOn = document.getElementById("turnOn")
const turnOff = document.getElementById("turnOff")

const lightBulb = document.getElementById("lightBulb")

function isLightBroken() {
    return lightBulb.src.indexOf ("quebrada") > -1
}

function lightBulbOn() {
    if (!isLightBroken())
    lightBulb.src = "./img/ligada.jpg"
}

function lightBulbOff() {
    if(!isLightBroken())
    lightBulb.src = "./img/desligada.jpg"
}

function lightBulbBroken() {
    lightBulb.src = "./img/quebrada.jpg"
}

turnOn.addEventListener("click", lightBulbOn)
turnOff.addEventListener("click", lightBulbOff)
lightBulb.addEventListener("mouseover", lightBulbOn)
lightBulb.addEventListener("mouseleave", lightBulbOff)
lightBulb.addEventListener("dblclick", lightBulbBroken)
