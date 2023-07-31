let cartItems = [];
let total = 0;

function addToCart(item) {
    cartItems.push(item);
    calculateTotal();
    updateCart();
}

function calculateTotal() {
    total = cartItems.length * 10; // Suponiendo que cada elemento cuesta $10
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    cartItems.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
    });

    const totalSpan = document.getElementById("cart-total");
    totalSpan.textContent = total;
}

function checkout() {
    alert(`¡Gracias por su compra! El total es $${total}.`);
    cartItems = [];
    total = 0;
    updateCart();
}