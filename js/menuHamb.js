let menu = document.getElementById('menu')
let closeMenu = document.getElementById('closeMenu')
let links = document.getElementById('links')


if(window.matchMedia(('450px'))){
    menu.addEventListener('click', ()=>{
        menu.style.display = 'none'
        closeMenu.style.display = 'block'
      
        links.style.display ='flex'
        links.style.flexDirection = 'column'
    })
    closeMenu.addEventListener('click', ()=>{
        menu.style.display = 'block'
        closeMenu.style.display = 'none'
        links.style.display ='none'
    })
}