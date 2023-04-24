/*let product = {};
product.name = "laxatives";
product.price = 13.99;
product.printName = function(){
    console.log(this.name);
}*/

const products = [
    {name:"soap", price:2.99},
    {name:"sponge", price:0.99},
    {name:"spatula", price:3.00},
    
];

const productContainer= document.getElementById("product-container");
let purchaseList = [];

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productElement = document.createElement("div");
    const button = document.createElement("button");
    button.textContent ="Buy";
    productElement.innerHTML = `<p>${product.name}: ${product.price}</p>`;
    productContainer.appendChild(productElement);
    productContainer.appendChild(button);
    
    
    
    button.addEventListener("click",
    function(event) {
        purchaseList.push(product);
        console.log(purchaseList)
    }
);
}

/*let purchaseListString = purchaseList.join(", ");
let pressed = false;


    myBasketBtn.addEventListener("click", 
    function(event) {
        if (!pressed) {
            const productContainer = document.getElementById("product-container");

            // createElement creates an element of the kind I indicate in the string.
            const myBasketDisplay = document.createElement("a"); // creates anchor element
            myBasketDisplay.textContent = purchaseListString; // sets the text inside
            productContainer.appendChild(myBasketDisplay); // Finally, I add the new element as a child of an existing element.
        }
    }
);*/






  


