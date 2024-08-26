import Error404Page from "./pages/Error404Page.js";
import HomePage from "./pages/HomePage.js";
import ProductPage from "./pages/ProductPage.js";
import { parseRequestUrl } from "./utils.js";

const routes = {
    "/": HomePage,
    "/#/products/:id": ProductPage
};
const router = () => {
    const request = parseRequestUrl();
    const parseUrl = ( request.resource ? `/${request.resource}` : '/' ) + 
                     ( request.id ? ':id' : '') + 
                     ( request.action ? `/${request.action}` : '');
    const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;
    const main = document.getElementById('main');
    main.innerHTML = page.render();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);