const openBtn = document.querySelector(".open-btn");
const btn = document.querySelector(".btn");
const menu = document.querySelector("nav");
const xIcon = document.querySelectorAll(".x-icon");
const menuList = document.querySelectorAll('.home-drop-down')
const dropDownMenu = document.querySelectorAll('.drop-down-menu')

openBtn.addEventListener("click", () => {
  menu.classList.add("show");
});
btn.addEventListener("click", () => {
  menu.classList.remove("show");
});

menuList.forEach(el=>{
el.addEventListener('click',()=>{
 if(!el.classList.contains('open-menu')){
  removeAll()
  el.classList.add('open-menu')
 }else{
  el.classList.remove('open-menu')
 }
})  
})

function removeAll(){
  menuList.forEach(menuEl=>{
    menuEl.classList.remove('open-menu')
  })
}