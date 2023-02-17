function r() {
    const buyIten = localStorage.getItem('buyPage')
    let all = document.getElementById('all')
    let div = document.createElement('div')
    div.classList.add('iten')
    div.innerHTML = buyIten
    all.appendChild(div)
}
const lupa = document.getElementById('lupa')
const cep = document.getElementById('cep')
const message = document.getElementById('message')
const map = document.getElementById('map')
function cepFun() {
    let me = document.createElement('span')
    me.innerHTML = ''
    if (cep.value.length <= 0 || cep.value.length <= 7) {
        me.innerHTML = 'Digite um cep válido'
        me.classList.add('fail')
        message.appendChild(me)
        setTimeout(() => {
            me.style.display = 'none'
        }, 2000)
        return
    }
}
lupa.addEventListener('click', () => {
    cepFun()
})

cep.addEventListener('keyup', (e) => {
    if (e.code == 'Enter' || e.code == 'NumpadEnter') {
        cepFun()
    }
})

map.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((data) => {
        console.log(data.coords.longitude)
        console.log(data.coords.latitude)
    })
})

