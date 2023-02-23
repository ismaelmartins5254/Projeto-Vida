let info = document.getElementById('info')
const lupa = document.getElementById('lupa')
const cep = document.getElementById('cep')
const frete = document.getElementById('frete')
const message = document.getElementById('message')
const loc = document.getElementById('loc')
let freteMessage = document.createElement('p')
let newCep = document.createElement('p')



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


function r() { //add remote HTML from page
    const buyIten = localStorage.getItem('buyPage')
    let all = document.getElementById('all')
    let div = document.createElement('div')
    div.classList.add('iten')
    div.innerHTML = buyIten
    all.appendChild(div)
}



function cepFun() { // filter zip code to see if it's valid
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
    } else {

        fetch(`https://viacep.com.br/ws/${cep.value}/json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => {
                resp.json()
                console.log(resp)
            }).then(data => {
                data.map((e) => {
                    console.log(e)
                })
            }).catch((err) => {
                console.log(err)
            })
        freteMessage.innerHTML += 'O valor do seu frete é de R$150 <br>'
        freteMessage.innerHTML += ``
        freteMessage.style.fontSize = '1em'
        loc.appendChild(freteMessage)
        /*cep.remove()
        lupa.remove()
        frete.remove()*/
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


