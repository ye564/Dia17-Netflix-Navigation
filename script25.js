const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')
console.log(nav)
open_btn.addEventListener('click',()=>{
    console.log("jhauh")
    nav.forEach(nav_element=> nav_element.classList.add('visible'))
})

close_btn.addEventListener('click',()=>{
    console.log("j256")
    nav.forEach(nav_element=>nav_element.classList.remove('visible'))
})
