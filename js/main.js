AOS.init();


document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    const body = document.querySelector('body')
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
        body.classList.toggle('lock')
    })
}