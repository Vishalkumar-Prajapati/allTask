function prepareDough() {
    return new Promise((resolve, reject) => {
        console.log("Preparing dough...");
        setTimeout(() => {
            console.log("Dough is ready!");
            resolve('vishal');
        }, 5000);
    })

}

function addSauce() {
    return new Promise((resolve, reject) => {
        console.log("Adding sauce...");
        setTimeout(() => {
            console.log("Sauce has been added!");
            resolve();
        }, 5000);
    });
}

function addToppings() {
    return new Promise((resolve, reject) => {
        console.log("Adding toppings...");
        setTimeout(() => {
            console.log("Toppings have been added!");
            resolve();
        }, 5000);
    });
}

function bakePizza() {
    return new Promise((resolve, reject) => {
        console.log("Baking pizza...");
        setTimeout(() => {
            console.log("🍕 is ready!");
            resolve();
        }, 5000);
    });
}
function makePizza() {
    return new Promise((resolve, reject) => {
        resolve();
    });
}

console.log("Making pizza...");
async function name() {
   await makePizza()
   await prepareDough()
   await addSauce()
   await addToppings()
   await bakePizza()
}
name();
