const openBtn = document.querySelector('.open-btn')
const btn = document.querySelector(".btn");
const menu = document.querySelector("nav");

openBtn.addEventListener('click', () => {
    menu.classList.add('show')
})
btn.addEventListener("click", () => {
  menu.classList.remove("show");

});