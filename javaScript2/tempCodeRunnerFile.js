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
