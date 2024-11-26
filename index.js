document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Запобігти відправці форми

    // Очищення попередніх помилок
    clearErrors();

    // Отримання значень полів
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    // Прапор для відстеження, чи є помилки
    let hasError = false;

    // Валідація поля Name
    if (name === "") {
        showError("nameError", "Name is required");
        markFieldError("name");
        hasError = true;
    }

    // Валідація поля Message
    if (message.length < 5) {
        showError("messageError", "Message must be at least 5 characters long");
        markFieldError("message");
        hasError = true;
    }

    // Валідація поля Phone
    const phoneRegex = /^\+380\d{9}$/; // Починається з +380 і містить 9 цифр
    if (!phoneRegex.test(phone)) {
        showError("phoneError", "Phone number must start with +380 and contain 9 digits");
        markFieldError("phone");
        hasError = true;
    }

    // Валідація поля Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Базова перевірка на @ та крапку
    if (!emailRegex.test(email)) {
        showError("emailError", "Email must be valid (e.g., example@mail.com)");
        markFieldError("email");
        hasError = true;
    }

    // Якщо немає помилок, показуємо дані у консолі
    if (!hasError) {
        console.log({
            name: name,
            message: message,
            phone: phone,
            email: email,
        });
        alert("Message sent successfully!");
    }
});

function showError(id, message) {
    document.getElementById(id).innerText = message;
}

function clearErrors() {
    document.querySelectorAll(".error").forEach(error => error.innerText = "");
    document.querySelectorAll("input, textarea").forEach(input => input.classList.remove("input-error"));
}

function markFieldError(fieldId) {
    document.getElementById(fieldId).classList.add("input-error");
}