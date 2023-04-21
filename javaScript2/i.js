var w;
function startWorker() {
      w = new Worker("worker.js");
    w.onmessage = function(event) {
      document.getElementById("result").innerHTML = event.data;
    };
}
function stopWorker() { 
  w.terminate();
  w = undefined;
}