const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    const closeMenu = () => {
        menuToggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("is-open");
    };

    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isExpanded));
        navLinks.classList.toggle("is-open", !isExpanded);
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });
}

const contactForm = document.getElementById("contact-form");
const contactNote = document.getElementById("contact-note");

if (contactForm && contactNote) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        contactNote.textContent = "Your suggestion has not been sent because this form is not connected to a submission service yet.";
    });
}
