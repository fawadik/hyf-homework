class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    constructor(products) {
      this.products = products;
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    removeProduct(product) {
      let removeProduct = product;
      this.products = this.products.filter(product => product !== removeProduct);
    }
  
    searchProduct(productName) {
      this.products = this.products.filter(
        product => product.name === productName
      );
    }
  
    getTotal() {
      let total = 0;
      this.products.forEach(element => {
        total += element.price;
      });
      return total;
    }
  
    renderProducts() {
      let div = document.getElementById("shoppingCart");
      let ul = document.createElement("ul");
      ul.setAttribute("id", "elements");
      div.appendChild(ul);
      let listItems = "";
      this.products.forEach(element => {
        listItems += `<li class = "items"><div id = "name">${
          element.name
        }</div><div id = "distance">:</div><div id = "price">${
          element.price
        }</div></li>`;
      });
      ul.innerHTML = listItems;
      let sum = document.createElement("p");
      sum.setAttribute("id", "total");
      sum.innerText = "Total : " + this.getTotal();
      div.appendChild(sum);
    }
  
    getUser() {
      return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then(response => {
          console.log(response);
          let mainDiv = document.getElementById("shoppingCart");
          let userName = document.createElement("p");
          userName.setAttribute("id", "userName");
          userName.innerHTML = "Customer Name: " + response.name;
          mainDiv.appendChild(userName);
          let emailID = document.createElement("p");
          emailID.setAttribute("id", "emailID");
          emailID.innerHTML = "Email: " + response.email;
          mainDiv.appendChild(emailID);
        });
    }
  }
  
  const flatscreen = new Product("Flat-screen", 5000);
  const microwave = new Product("Microwave", 7000);
  const printer = new Product("Printer", 3000);
  const playstation = new Product("Playstation", 3400);
  const shoppingCart = new ShoppingCart([flatscreen]);
  shoppingCart.addProduct(microwave);
  shoppingCart.addProduct(printer);
  shoppingCart.addProduct(playstation);
  console.log(shoppingCart);
  shoppingCart.renderProducts();
  shoppingCart.getUser();
  