document.querySelectorAll(".faq-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const content = btn.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }

    });

});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

document
    .getElementById("bookingForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Booking request submitted!");

    });