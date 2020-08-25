document.addEventListener("DOMContentLoaded", function () {
  updateDOM();
});

function updateDOM() {
  let innerText = document.getElementById("text");
  innerText.innerHTML = "This is really cool!";
}
