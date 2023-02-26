function textoFone() {
    window.location.href = '../html/fone.html'
}
function CelBtn() {
    window.location.href = '../html/celulares.html'
}

let info = document.getElementById('a3')
let message = document.getElementById('men')

info.addEventListener('click', (e) => {
    let me = document.createElement('span')
    e.preventDefault()
    me.innerHTML = 'Página de informações está indisponível &#128531;'
    me.classList.add('fail')
    message.appendChild(me)
    setTimeout(() => {
      me.style.display = 'none'
      me.remove()
    }, 2000)
    return
  })
  
  

/* Take item from HTML its add all parent in the new page */

let bestSeler = document.getElementById('bestsellerIten')
let sale = document.getElementById('saleItens')
let buttonSeler = document.getElementById('buttonSeler')

buttonSeler.addEventListener('click', (e)=>{
    window.location.href = '../html/bestSeler.html'
})

bestSeler.addEventListener('click', (e) => {
    e.preventDefault()
    let target = e.target
    let parent = target.closest('div')
    if(target.id == 'bestsellerIten') return
    
    localStorage.setItem('buyPage', parent.innerHTML)
    let img = document.createElement('img')
    img.src = '../imagens/loading.svg'
    img.classList.add('loading')
    parent.appendChild(img)
    console.log(target)
    setTimeout(() => {
        window.location.href = '../html/buyPage.html'
    }, 500)
})

sale.addEventListener('click', (e)=>{
    e.preventDefault()
    let target = e.target
    let parent = target.closest('div')
    if(target.id == 'saleItens') {
        return
    }
    localStorage.setItem('buyPage', parent.innerHTML)
    let img = document.createElement('img')
    img.src = '../imagens/loading.svg'
    img.classList.add('loading')
    parent.appendChild(img)
   
    setTimeout(() => {
        window.location.href = '../html/buyPage.html'
    }, 500)
})