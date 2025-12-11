// Кнопка "Order" у hero — показує повідомлення
const orderBtn = document.querySelector(".btn");

if (orderBtn) {
    orderBtn.addEventListener("click", () => {
        alert("Thank you! We will contact you soon!");
    });
}

// Обробка форми в блоці Contact
const submitBtn = document.querySelector(".submit-btn");

if (submitBtn) {
    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const name = document.querySelector("input[placeholder='Name']").value;
        const email = document.querySelector("input[placeholder='Email']").value;

        if (name.trim() === "" || email.trim() === "") {
            alert("Please fill in both fields!");
        } else {
            alert("Your request has been sent successfully!");
        }
    });
}
