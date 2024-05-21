// js/script.js
function updateClock() {
    const now = new Date()
    
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')

    document.getElementById("hours").textContent = hours
    document.getElementById("min").textContent = minutes
    document.getElementById("sec").textContent = seconds
}

updateClock()

setInterval(updateClock, 0.1)
