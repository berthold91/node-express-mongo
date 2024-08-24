import HomePage from "./pages/HomePage.js";
const products = document.getElementById("product-list");
products.innerHTML = HomePage.render();