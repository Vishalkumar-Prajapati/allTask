// You have been tasked with implementing a product inventory system using 
// JavaScript. Your system should allow users to add new products, update
// existing products, delete products, and display all the products in the
// inventory. You should also implement methods to freeze the inventory and
// clone the inventory. Here's an example of how you can implement this:
// Task: Implement the inventory functionality of the product inventory
// system using JavaScript. Your inventory should have the following
// properties and methods:

// 1. Properties:
// * products: An object to store the products in the inventory.

// 2. Methods:
// * addProduct: A method to add a new product to the inventory.
// * updateProduct: A method to update an existing product in the inventory.
// * deleteProduct: A method to delete a product from the inventory.
// * getProducts: A method to get all the products in the inventory.
//freezeInventory: A method to freeze the inventory and prevent further changes.
// * cloneInventory: A method to clone the inventory.

class Inventory {
    constructor() {
        this.oProducts = {};
        this.isFreez = false;
    }
    addProduct(product, quantity) {
        if (!this.isFreez) {
            this.product = product;
            this.quantity = quantity;
            Object.defineProperty(this.oProducts, this.product, {
                value: this.quantity,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            console.log("Already !! freeze the inventory and prevent further changes");
        }

    }
    getProducts() {
        return this.oProducts;
    }
    updateProduct(product, newQuantity) {
        if (!this.isFreez) {
            this.product = product;
            this.newQuantity = newQuantity;
            if (this.product in this.oProducts) {
                this.oProducts[this.product] = this.newQuantity;
            } else {
                console.log(`${this.product} Product is not available`);
            }
        } else {
            console.log("Already !! freeze the inventory and prevent further changes");
        }

    }
    deleteProduct(product) {
        if (!this.isFreez) {
            this.product = product
            if (this.product in this.oProducts) {
                delete this.oProducts[this.product]
            }
            else {
                console.log(`${this.product} Product is not available`);
            }
        } else {
            console.log("Already !! freeze the inventory and prevent further changes");
        }

    }
    cloneInventory() {
        // return {...this.oProducts}
        return Object.assign({}, this.oProducts)

    }
    freezeInventory() {
        Object.freeze(this.oProducts);
        this.isFreez=true;
    }


}

const obj = new Inventory();
obj.addProduct('book', 10);              //addmethod
obj.addProduct('pen', 100);
obj.addProduct('bag', 5);
obj.addProduct('calculater', 15);


console.log("all Products=> ",obj.getProducts());                    //getmethod


// obj.updateProduct('book',5);                                         //updeate method
// console.log("all Products with updates=> ",obj.getProducts());

// obj.deleteProduct('book');                                           //delete method
// console.log("all Products after deletes=> ",obj.getProducts());


// obj.freezeInventory();                                                 //freeze method
console.log(obj.cloneInventory());                                      //clone Inventory
// obj.deleteProduct('bag');                                //throw TypeError because of freeze
// obj.updateProduct('book',5);                                         //updeate method

// console.log(obj.getProducts());