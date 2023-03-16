let infor = document.getElementById('info') //quando tiver na tela de pc
let info = document.getElementById('a3')
let message = document.getElementById('men')

function onload(){
    let all = document.getElementById('all')
    let item = localStorage.getItem('carPage')
    all.classList.add('iten')
    all.innerHTML = item

}

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
