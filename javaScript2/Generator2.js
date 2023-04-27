// Create an async generator with same pizza making example
// An async task. Pretend it's doing something more useful
// in practice.
function delayedValue(time, value) {
    return new Promise((resolve /*, reject*/) => {
        setTimeout(() => resolve(value), time);
    });
}

async function* generate() {
    yield await delayedValue(2000, 1);
    yield await delayedValue(100, 2);
    yield await delayedValue(500, 3);
    yield await delayedValue(250, 4);
    yield await delayedValue(125, 5);
    yield await delayedValue(50, 6);
    console.log('All done!');
    yield delayedValue(500,7);
}

async function main() {
    // for await (const value of generate()) {
    //     console.log('value', value);
    // }
    for (let i=0;i<6;i++) {
        console.log('value', (await generate().next()).value);
    }
}

main()
    .catch((e) => console.error(e));



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
// async function name() {
//    await makePizza()
//    await prepareDough()
//    await addSauce()
//    await addToppings()
//    await bakePizza()
// }
// name();

async function* generate() {
    yield await makePizza()
    yield await prepareDough()
    yield await addSauce()
    yield await addToppings()
    yield await bakePizza()
}

async function main() {
    // console.log(generate().next());
    for await (const value of generate()) {

    }
    //    const obj=generate();
    //    obj.next()
    //    obj.next()
    //    obj.next()
    //    obj.next()
    //    obj.next()

}
main();