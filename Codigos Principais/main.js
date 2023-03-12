let bestSeler = document.getElementById('bestsellerIten')
let sale = document.getElementById('saleItens')
let buttonSeler = document.getElementById('buttonSeler')
let saleButton = document.getElementById('saleButton')


let info = document.getElementById('a3')
let car = document.getElementById('car')
let message = document.getElementById('men')
let iniP = document.getElementById('iniP')
let ini = document.getElementById('ini')
let infor = document.getElementById('info') //quando tiver na tela de pc


// important messages
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

iniP.addEventListener('click', (e) => { //ao clicar no botão de inicio
    e.preventDefault()
    let me = document.createElement('span')
    me.innerHTML = 'Você já está na página de inicio :)'
    me.classList.add('fail')
    message.appendChild(me)
    setTimeout(() => {
        me.style.display = 'none'
        me.remove()
    }, 2000)
    return
})
ini.addEventListener('click', (e) => { //ao clicar no botão de inicio
    e.preventDefault()
    let me = document.createElement('span')
    me.innerHTML = 'Você já está na página de inicio :)'
    me.classList.add('fail')
    message.appendChild(me)
    setTimeout(() => {
        me.style.display = 'none'
        me.remove()
    }, 2000)
    return
})
infor.addEventListener('click', (e) => { 
    e.preventDefault()
    let me = document.createElement('span')
    me.innerHTML = 'Página de informações está indisponível &#128531;'
    me.classList.add('fail')
    message.appendChild(me)
    setTimeout(() => {
        me.style.display = 'none'
        me.remove()
    }, 2000)
    return
})

car.addEventListener('click', ()=>{
    let me = document.createElement('span')
    me.innerHTML = 'Redirecionando...'
    me.style.backgroundColor = '#853ef8'
    me.style.color = '#fff'
    me.style.width = '20em'
    me.style.textAlign = 'center'
    me.style.borderRadius = '5px'
    message.appendChild(me)
    setTimeout(() => {
        me.remove()
        window.location.href = '../html/carPage.html'
    }, 1000)
    return
}) 


//Change of Pages
buttonSeler.addEventListener('click', () => {
    window.location.href = '../html/bestSeler.html'
})

saleButton.addEventListener('click', () => {
    window.location.href = '../html/Sale.html'
})

function textoFone() {
    window.location.href = '../html/fone.html'
}
function CelBtn() {
    window.location.href = '../html/celulares.html'
}


/* Take item from HTML its add all parent in the new page */
bestSeler.addEventListener('click', (e) => {
    e.preventDefault()
    let target = e.target
    let parent = target.closest('div')
    if (target.id == 'bestsellerIten') return

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

sale.addEventListener('click', (e) => {
    e.preventDefault()
    let target = e.target
    let parent = target.closest('div')
    if (target.id == 'saleItens') {
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

document.onload = function(){
    let valueCar = document.getElementById('valueCar')
    valueCar.textContent = localStorage.getItem('quant')
}() //auto execução