let myform = document.getElementById("myform");
let ourfield = document.getElementById("ourfield");
let tasklist = document.getElementById("tasklist");
myform.addEventListener("submit", (x) => {
  x.preventDefault(); //prevent default action of browser after submitting ie refresh/submit form
  createitem(ourfield.value);
});

function createitem(z) {
  let myhtml = `<li>${z} <button onclick="itemdeleter(this)">Done</button></li>`;
  tasklist.insertAdjacentHTML("beforeend", myhtml);
  ourfield.value = "";
  ourfield.focus();
}

function itemdeleter(y) {
  y.parentElement.remove();
}
