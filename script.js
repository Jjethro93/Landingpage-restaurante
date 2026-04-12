
let btnMenu = document.getElementById('mobile-btn');
let menu = document.getElementById('mobile-menu')




btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
    console.log('click')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
