let prefix = 'machine';
let machine = {
    'machine name': 'server',
    [prefix + ' hours']: 10000
};

console.log(machine['machine name']); // server
console.log(machine['machine  hours']); // 10000