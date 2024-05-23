function updateClock() {
    const now = new Date()

    const hours = String(now.getHours()).padStart(2, "0")
    const minutes = String(now.getMinutes()).padStart(2, "0")
    const seconds = String(now.getSeconds()).padStart(2, "0")

    document.getElementById("hours").textContent = hours
    document.getElementById("min").textContent = minutes
    document.getElementById("sec").textContent = seconds

    const body = document.body

    if (hours >= 2 && hours < 6) {
        body.style.background = "linear-gradient(120deg, #FF8C00, #FFFFE0);"
    } else if (hours >= 6 && hours < 12) {
        body.style.background = "linear-gradient(120deg, #FFFFE0, #8B008B)"
    } else if (hours >= 12 && hours < 16) {
        body.style.background = "linear-gradient(120deg, #8B008B, #9370DB)"
    } else if (hours >= 16 && hours < 20) {
        body.style.background = "linear-gradient(120deg, #9370DB, #191970)"
    } else if (hours >= 20 && hours < 24) {
        body.style.background = "linear-gradient(120deg, #191970, #000)"
    } else {
        body.style.background = "linear-gradient(120deg, #000, #FF8C00)"
    }
}

updateClock()

setInterval(updateClock, 1000)

///// CRONÔMETRO /////
let stopwatchInterval
let stopwatchSeconds = 0
let isStopwatchRunning = false

document.getElementById("startStopwatch").addEventListener("click", () => {
    const startButton = document.getElementById("startStopwatch")
    if (isStopwatchRunning) {
        clearInterval(stopwatchInterval)
        startButton.textContent = "Iniciar"
    } else {
        stopwatchInterval = setInterval(() => {
            stopwatchSeconds++
            document.getElementById("stopwatch").textContent = new Date(stopwatchSeconds * 1000).toISOString().substr(11, 8)
        }, 1000)
        startButton.textContent = "Pausar"
    }
    isStopwatchRunning = !isStopwatchRunning
})

document.getElementById("resetStopwatch").addEventListener("click", () => {
    clearInterval(stopwatchInterval)
    stopwatchInterval = null
    stopwatchSeconds = 0
    document.getElementById("stopwatch").textContent = "00:00:00"
    document.getElementById("startStopwatch").textContent = "Iniciar"
    isStopwatchRunning = false
})

///// TEMPORIZADOR /////
let timerInterval
let isTimerRunning = false

document.getElementById("startTimer").addEventListener("click", () => {
    const startButton = document.getElementById("startTimer")
    const timerInput = parseInt(document.getElementById("timerInput").value)
    let timerSeconds = isNaN(timerInput) ? 0 : timerInput

    if (isTimerRunning) {
        clearInterval(timerInterval)
        startButton.textContent = "Iniciar"
    } else {
        if (timerSeconds > 0) {
            timerInterval = setInterval(() => {
                if (timerSeconds > 0) {
                    timerSeconds--
                    document.getElementById("timer").textContent = new Date(timerSeconds * 1000).toISOString().substr(11, 8)
                } else {
                    clearInterval(timerInterval)
                    timerInterval = null
                    alert("Tempo esgotado!")
                }
            }, 1000)
            startButton.textContent = "Pausar"
        }
    }
    isTimerRunning = !isTimerRunning
})

document.getElementById("resetTimer").addEventListener("click", () => {
    clearInterval(timerInterval)
    timerInterval = null
    document.getElementById("timer").textContent = "00:00:00"
    document.getElementById("timerInput").value = ""
    document.getElementById("startTimer").textContent = "Iniciar"
    isTimerRunning = false
})

document.getElementById("showStopwatch").addEventListener("click", () => {
    document.getElementById("clock").style.display = "none"
    document.getElementById("panel").style.display = "none"
    document.getElementById("stopwatchContainer").style.display = "flex"
})

document.getElementById("showTimer").addEventListener("click", () => {
    document.getElementById("clock").style.display = "none"
    document.getElementById("panel").style.display = "none"
    document.getElementById("timerContainer").style.display = "flex"
})

document.getElementById("backFromStopwatch").addEventListener("click", () => {
    document.getElementById("clock").style.display = "flex"
    document.getElementById("panel").style.display = "flex"
    document.getElementById("stopwatchContainer").style.display = "none"
})

document.getElementById("backFromTimer").addEventListener("click", () => {
    document.getElementById("clock").style.display = "flex"
    document.getElementById("panel").style.display = "flex"
    document.getElementById("timerContainer").style.display = "none"
})
