let openBtn = document.querySelector('.header__burger')
let closeBtn = document.querySelector('.closeModal')
let menu = document.querySelector('.mobile__menu')

openBtn.addEventListener('click', function(){
    menu.classList.add('active')
})

closeBtn.addEventListener('click', function(){
    menu.classList.remove('active')
})