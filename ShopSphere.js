
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}


function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id, name, price, image) {

    let cart = getCart();

    let product = cart.find(item => item.id === id);

    if (product) {
        product.quantity++;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    saveCart(cart);

    updateCart();

    alert(name + " added to cart successfully!");
}

function toggleCart() {

    const cartSection = document.getElementById("cartSection");

    if (cartSection.style.display === "block") {
        cartSection.style.display = "none";
    } else {
        cartSection.style.display = "block";
        updateCart();
        cartSection.scrollIntoView({ behavior: "smooth" });
    }
}

function increaseQuantity(id) {

    let cart = getCart();

    let product = cart.find(item => item.id === id);

    if (product) {
        product.quantity++;
    }

    saveCart(cart);
    updateCart();
}


function decreaseQuantity(id) {

    let cart = getCart();

    let product = cart.find(item => item.id === id);

    if (product) {
        product.quantity--;

        if (product.quantity <= 0) {
            cart = cart.filter(item => item.id !== id);
        }
    }

    saveCart(cart);
    updateCart();
}

function removeProduct(id) {

    let cart = getCart();

    cart = cart.filter(item => item.id !== id);

    saveCart(cart);
    updateCart();
}


function updateCart() {

    let cart = getCart();

    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartItems) return;

    let count = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    let total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    if (cartCount) {
        cartCount.textContent = count;
    }

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="text-muted text-center py-4">
                Your cart is empty!
                <br>
                Start adding products.
            </p>
        `;

    } else {

        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">

                <img src="${item.image}" alt="${item.name}">

                <div class="flex-grow-1">
                    <h6>${item.name}</h6>
                    <p class="text-muted mb-1">
                        $${item.price}
                    </p>
                </div>

                <div class="d-flex align-items-center gap-2">

                    <button class="quantity-btn"
                        onclick="decreaseQuantity(${item.id})">
                        -
                    </button>

                    <span>${item.quantity}</span>

                    <button class="quantity-btn"
                        onclick="increaseQuantity(${item.id})">
                        +
                    </button>

                </div>

                <button class="btn btn-outline-danger btn-sm"
                    onclick="removeProduct(${item.id})">
                    <i class="fa-solid fa-trash"></i>
                </button>

            </div>
        `).join("");

    }

    if (cartTotal) {
        cartTotal.textContent = "$" + total.toFixed(2);
    }
}


function checkout() {

    let cart = getCart();

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    window.location.href="checkout.html";
}