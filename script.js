/* ===================================
   TYPING EFFECT
==============================*/

const text = "Innovate code create connect";

let index = 0;

function typeEffect() {
    const typingText = document.getElementById("typing-text");

    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();

/* ======================
   COUNTDOWN TIMER
===================*/

/* 
change this date according to your
event date
format: Year, Month - 1, Day
*/

const eventDate = new Date(2026, 11, 31, 9, 0, 0).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = String(days).padStart(2, "0");
    document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, "0");
}

/* Run immediately */
updateCountdown();

/* Update every second */
setInterval(updateCountdown, 1000);

/* ====================================
    SCROLL REVEAL ANIMATION
=================================== */

function revealElements() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(function (element) {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

/* Check while scrolling */
window.addEventListener("scroll", revealElements);

/* Check when page loads */
revealElements();

/* ==============================================
    REGISTER BUTTON 
=========================================== */

const registerButton = document.querySelector(".register-btn");

registerButton.addEventListener("click", function () {
    alert("Registration successful!\nWelcome to SESA TechFest 2026!");
});