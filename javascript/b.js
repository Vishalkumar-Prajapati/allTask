Array.prototype.remove = function(item) {
    for (i = 0; i < this.length; i++) {
        if (this[i] === item) {
            for (var j = i; j < this.length - 1; j++) {
                this[j] = this[j + 1];
            }
            this.length = this.length - 1
            return;
        }
    }
}

var items = ['a', 'b', 'c', 'd'];
items.remove('c');
console.log(items)