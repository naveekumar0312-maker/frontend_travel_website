const contactBtn = document.getElementById("contactBtn");
const contactSection = document.getElementById("contactSection");

contactBtn.addEventListener("click", () => {
    contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
