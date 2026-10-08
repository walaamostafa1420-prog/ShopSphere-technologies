
window.onload = function () {
    console.log("Welcome to ShopSphere Technologies");
};

const cartButtons = document.querySelectorAll(".btn-success");

cartButtons.forEach(button => {

    button.addEventListener("click", function () {

        alert("Product added to cart successfully!");

    });

});


const shopBtn = document.querySelector(".btn-primary");

if (shopBtn) {

    shopBtn.addEventListener("click", function () {

        document.getElementById("products").scrollIntoView({
            behavior: "smooth"
        });

    });

}


const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.querySelector("input[type='text']").value;
        const email = document.querySelector("input[type='email']").value;
        const message = document.querySelector("textarea").value;

        if (name === "" || email === "" || message === "") {

            alert("Please fill in all fields.");

        } else {

            alert("Your message has been sent successfully!");

            form.reset();

        }

    });

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "translateY(0px)";

    });

});
