let cart = [];

function add(name, price, btn) {
  cart.push({ name, price });
  save();
  animate(btn);
}

function save() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function goCheckout() {
  window.location.href = "checkout.html";
}

function animate(btn) {
  btn.innerText = "Tilføjet ✓";
  setTimeout(() => {
    btn.innerText = btn.getAttribute("data-text") || "Tilføj";
  }, 800);
}
