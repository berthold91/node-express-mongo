import data from "../data.js";
const HomePage = {
    render: () => {
        const { products } = data;
        return (`<ul class="d-flex justify-content-between align-items-center mr-auto flex-wrap">
            ${ products.map( (product) => (
                `
                <div class="col-md-4">
                <div class="product-card">
                            <div class="product-card-img">
                                <label class="stock bg-success">${product.countInStock && product.countInStock > 0 ?
                                 `${product.countInStock} In Stock` : "out of Stock" }</label>
                                <img src= ${product.image} alt= ${product.name}>
                            </div>
                            <div class="product-card-body">
                                <p class="product-brand">${product.brand}</p>
                                <h5 class="product-name">
                                   <a href="">
                                        ${product.name}
                                   </a>
                                </h5>
                                <div>
                                    <span class="selling-price">$${product.price}</span>
                                    <span class="original-price">$${product.price}</span>
                                </div>
                                <div class="mt-2">
                                    <a href="" class="btn btn1">Add To Cart</a>
                                    <a href="" class="btn btn1"> <i class="fa fa-heart"></i> </a>
                                    <a href="" class="btn btn1"> View </a>
                                </div>
                            </div>
                        </div>
                        </div>
                `
            )) }
            </ul>`);
    }
};
export default HomePage;