console.log('Script loaded');

console.log(getAvailableProducts());

let availableProducts = getAvailableProducts();

let productList = document.getElementById("productList")
function displayProductList (products) {
    products.forEach(element => {
        let li = document.createElement("li");
        productList.appendChild(li);

        let name = document.createElement("div");
        name.setAttribute("class", "name");
        name.innerHTML = element.name;        
        li.appendChild(name);

        let price = document.createElement("div");
        price.setAttribute("class", "price");
        price.innerHTML = element.price;        
        li.appendChild(price);

        let rating = document.createElement("div");
        rating.setAttribute("class", "rating");
        rating.innerHTML = element.rating;        
        li.appendChild(rating);

        let shipInfo = document.createElement("div");
        shipInfo.setAttribute("class", "shipsTo");
        let ul = document.createElement("ul");
        shipInfo.appendChild(ul);
        let countryLi = document.createElement("li");
        ul.appendChild(countryLi);
        countryLi.innerHTML = element.shipsTo;        
        li.appendChild(shipInfo);

        let button = document.createElement("button");
        button.innerHTML = "Add to cart";
        li.appendChild(button);
        //button.addEventListener("click", shoppingCart(element));
        button.onclick = () => shoppingCart(element);

    });

}
displayProductList(availableProducts);

let shoppingCartUl = document.getElementById("shoppingCart");
function shoppingCart (element) {
    let shoppingLi = document.createElement("li");
    shoppingCartUl.appendChild(shoppingLi);

    let shoppingNameDiv = document.createElement("div");
    shoppingNameDiv.setAttribute("class", "name");
    shoppingNameDiv.innerHTML = element.name;
    shoppingLi.appendChild(shoppingNameDiv);

    let shoppingPriceDiv = document.createElement("div");
    shoppingPriceDiv.setAttribute("class", "price");
    shoppingPriceDiv.innerHTML = element.price;
    shoppingLi.appendChild(shoppingPriceDiv);

    let total = document.getElementById("totalPrice");
    
    let totalPrice = parseInt(total.innerHTML);
    if (totalPrice >= 0) {
        totalPrice+= element.price;        
    }
    else {
        totalPrice = element.price;
    }
    total.innerHTML = totalPrice;
}

//Price analytics
let productPrices = availableProducts.map(price => price.price);
function funcForServer (message) {
    console.log(message);
}
sendPricesToServer(productList, funcForServer);

//Render products function
function renderProducts(products) {
    let clearProducts = document.getElementById("productList");
    clearProducts.innerHTML = "";
    displayProductList(products);
}
renderProducts(availableProducts);

//searching products by name;

let searchText = document.getElementById("input");
searchText.addEventListener("keypress", function(event) {
        if (event.keyCode === 13) {
        let requiredProduct = searchText.Value;
        console.log(requiredProduct);
        let filteredProducts = availableProducts.filter(reqProduct => requiredProduct === reqProduct.name);
        console.log(filteredProducts);
        if (output.length === 0) {
            renderProducts(availableProducts);
        }
        else {
            renderProducts(filteredProducts);
        }
    }
});

//searching product by country

let searchCountry = document.getElementById("country");
searchCountry.addEventListener("change", function() {
    let country = searchCountry.Value;
    console.log(country);
    let productsByCountry = availableProducts.filter(product => product.shipsTo.includes(country));
    console.log(productsByCountry);
    if (productsByCountry.length === 0) {
        renderProducts(availableProducts);
    }
    else {
        renderProducts(productsByCountry);
    }
});

/*function productAddition(receivedProducts) {
    let productList = document.getElementById("productList");
    for (var i = 0; i < receivedProducts.length; i++) {
        let getProduct = document.createElement("li");
        
        let prodID = document.createElement("div");
        prodID.innerHTML = receivedProducts[i].id;
        prodID.setAttribute("class", "prodID");
        getProduct.appendChild(prodID);

        let name = document.createElement("div");
        name.innerHTML = receivedProducts[i].name;
        name.setAttribute("class", "name");
        getProduct.appendChild(name);

        let price = document.createElement("div");
        price.innerHTML = receivedProducts[i].price;
        price.setAttribute("class", "price");
        getProduct.appendChild(price);

        let rating = document.createElement("div");
        rating.innerHTML = receivedProducts[i].rating;
        rating.setAttribute("class", "rating");
        getProduct.appendChild(rating);

        let shippingInfo = document.createElement("div");
        shippingInfo.setAttribute("class", "shipsTo");
        getProduct.appendChild(shippingInfo);

        for (var j = 0; j < receivedProducts[i].shipsTo.length; j++) {
            let shippingCountry = document.createElement("li");
            shippingCountry.innerHTML = receivedProducts[i].shipsTo[j];
            shippingInfo.appendChild(shippingCountry);
        }
    }
    productList.appendChild(getProduct);
}
productAddition(availableProducts);*/