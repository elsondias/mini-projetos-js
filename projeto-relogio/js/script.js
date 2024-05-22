function updateClock() {
    const now = new Date()

    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')

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
