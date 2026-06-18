let cart = [];
let total = 0;

function add(name, price) {
  cart.push({ name, price });
  total += price;
  render();
}

function render() {
  const list = document.getElementById("cart");
  const totalEl = document.getElementById("total");

  list.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} kr`;
    list.appendChild(li);
  });

  totalEl.textContent = "Total: " + total + " kr";
}
