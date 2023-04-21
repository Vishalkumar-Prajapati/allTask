const counter = document.querySelector('#counter');
const blockLoopButton = document.querySelector('#blockLoop');
const incrementCounterButton = document.querySelector('#increaseCounter');
const decrementCounterButton = document.querySelector('#decreaseCounter');

function incrementOrDecrementCounter(number) {
	const currentCounter = parseInt(counter.innerText);
	counter.innerText = currentCounter + number;
}

incrementCounterButton.addEventListener('click', () => incrementOrDecrementCounter(1));
decrementCounterButton.addEventListener('click', () => incrementOrDecrementCounter(-1));
blockLoopButton.addEventListener('click', () => {
	// block main thread for 10 seconds

	// will block main thread.
	// const start = Date.now();
	// console.log('blocked main thread');
	// while (Date.now() - start < 10000) { }
	// console.log('unblocked main thread');

	// won't block main thread.
	const worker = new Worker('worker.js');
	worker.postMessage('start');
	worker.onmessage = (event) => {
		console.log('worker: unblocked main thread');
		worker.terminate();
	}
})