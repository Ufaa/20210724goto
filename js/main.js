/*
const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("sp-nav");
  nav.classList.toggle('in');
});
*/

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("menu").addEventListener("click", function () {
    this.classList.toggle("open");
    document.getElementById("sp-nav").classList.toggle("in")
  })
});
