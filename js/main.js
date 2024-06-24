'use strict'

console.log("js работает")

// Получаем span
let span = document.querySelector(".span-turn")

let currentX = true

function currentPlayer () {
    if (currentX) {
        span.textContent = "Х"
    } else {
        span.textContent = "O"
    }
}

function test(data, target) {
    if (currentX) {
        target.innerText = "X"
    } else {
        target.innerText = "O"
    }

    currentX = !currentX
}