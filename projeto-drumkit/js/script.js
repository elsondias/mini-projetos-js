"use strict"

const songs = {
    "A": "boom.wav",
    "S": "clap.wav",
    "D": "hihat.wav",
    "F": "kick.wav",
    "G": "openhat.wav",
    "H": "ride.wav",
    "J": "snare.wav",
    "K": "tink.wav",
    "L": "tom.wav"
}

const createDiv = (text) => {
    const div = document.createElement("div")
    div.classList.add("key")
    div.textContent = text
    div.id = text
    document.getElementById("container").appendChild(div)
}

const show = (songs) => Object.keys(songs).forEach(createDiv)

const takeSong = (word) => {
    const audio = new Audio(`./sounds/${songs[word]}`)
    audio.play()
}

const addEffect = (word) => {
    const div = document.getElementById(word)
    div.classList.add("active")
    div.addEventListener("transitionend", () => {
        div.classList.remove("active")
    }, { once: true })
}

const activateDiv = (event) => {
    
    const word = event.type === "click" ? event.target.id : event.key.toUpperCase()

    const permittedLetter = songs.hasOwnProperty(word)
    if (permittedLetter) {
        addEffect(word)
        takeSong(word)
    }
}

show(songs)

document.getElementById("container").addEventListener("click", activateDiv)
window.addEventListener("keydown", activateDiv)
