let product = {};
product.name = "laxatives";
product.price = 13.99;
product.printName = function(){
    console.log(this.name);
}

const products = [
    {name:"soap", price:2.99},
    {name:"sponge", price:0.99},
    {name:"spatula", price:3},
];

const productContainer= document.getElementById("product-container");

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productElement = document.createElement("div");
    productElement.innerHTML = `<p>${product.name}: ${product.price}</p>`;
    productContainer.appendChild(productElement);
  }



