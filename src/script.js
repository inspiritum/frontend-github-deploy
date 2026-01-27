const button = document.getElementById("contactBtn");
const email = document.getElementById("email");

button.addEventListener("click", () => {
    const isHidden = email.classList.toggle("hidden");

    button.textContent = isHidden ? "Показать контакты" : "Скрыть контакты";
});
