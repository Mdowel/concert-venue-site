const subscribeBtn = document.getElementById("subscribe-btn")
const modal = document.getElementById("newsletter-modal")
const modalSubmitBtn = document.getElementById("modal-btn")
const modalCloseBtn = document.getElementById("close-btn")
const modalText = document.getElementById("modal-text")
const modalEmail = document.getElementById("modal-email")
const modalBtn = document.getElementById("modal-btn")


subscribeBtn.onclick = function() {
    modal.style.display = "block"
}

modalCloseBtn.onclick = function() {
    modal.style.display = "none"
}

modalSubmitBtn.onclick = function() {
    modalText.innerText = `
    Thank you for signing up!
    `
    modalEmail.style.display = "none"
    modalBtn.style.display = "none"
}
