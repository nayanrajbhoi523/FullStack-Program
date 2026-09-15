const loadBtn = document.getElementById("loadBtn");
const products = document.getElementById("products");
const status = document.getElementById("status");

loadBtn.addEventListener("click", fetchProducts);

async function fetchProducts() {
    status.textContent = "Loading Products...";
    products.innerHTML = "";

    try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
            throw new Error("Failed to fetch products data");
        }

        const data = await response.json();

        status.textContent = "";

        data.products.forEach(product => {
            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p class="price">Price : $${product.price}</p>
                <p class="rating">Rating : ${product.rating}</p>
            `;

            products.appendChild(card);
        });
    } catch (error) {
        status.textContent = error.message;
    }
}