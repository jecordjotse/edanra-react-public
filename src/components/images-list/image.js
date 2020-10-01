//document.readyState
var contain = document.getElementById("my_container");
console.log("before ", contain);
(function () {
  console.log("after ", contain);
})();
function docReady(fn) {
  // see if DOM is already available
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function () {
  console.log("after ", contain);
});

function printer(str) {
  console.log(str);
}
