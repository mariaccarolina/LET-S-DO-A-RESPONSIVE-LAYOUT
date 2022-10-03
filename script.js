let Qtt = document.querySelector(".qtd");
let count = 0;

function ADD() {
  count = count + 1;
  Qtt.textContent = count;
}
function RMV() {
  if (count > 0) {
    count = count - 1;
  }
  Qtt.textContent = count;
}
