let info = document.getElementById('info')
const lupa = document.getElementById('lupa')
const cep = document.getElementById('cep')
const frete = document.getElementById('frete')
const message = document.getElementById('message')
const loc = document.getElementById('loc')
let End = document.getElementById('End')
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


function onload() { //add remote HTML from page
    const buyIten = localStorage.getItem('buyPage')
    let all = document.getElementById('all')
    let div = document.createElement('div')
    div.classList.add('iten')
    div.innerHTML = buyIten
    all.appendChild(div)
}


function creatElementsCep(resp){ //creat element case sucess
    let rua = document.createElement('p')
    let bairro = document.createElement('p')
    let cidade = document.createElement('p')
    rua.innerHTML = resp.logradouro
    bairro.innerHTML = `Bairro: ${resp.bairro}`
    cidade.innerHTML = `${resp.localidade} ${resp.uf}`
    End.appendChild(rua)
    End.appendChild(bairro)
    End.appendChild(cidade)
    freteMessage.innerHTML = 'O valor do seu frete é de R$150 <br>'
    cep.remove()
    lupa.remove()
    frete.remove()
}


async function cepFun() { // filter zip code to see if it's valid
    let me = document.createElement('span')
    me.innerHTML = ''
    if (cep.value.length <= 0 || cep.value.length <= 7) { //if zip code = false
        me.innerHTML = 'Digite um cep válido'
        me.classList.add('fail')
        message.appendChild(me)
        setTimeout(() => {
            me.style.display = 'none'
        }, 2000)
        return
    } else {
        try {
            let link = await fetch(`https://viacep.com.br/ws/${cep.value}/json`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            let resp = await link.json()
            creatElementsCep(resp)
        } catch (err) { //if value number zip code = true but zip code not found
            console.log(err)
            let me = document.createElement('span')
            me.innerHTML = 'cep inválido, por favor adicione um cep válido :)'
            me.classList.add('fail')
            message.appendChild(me)
            setTimeout(() => {
                me.remove()
            }, 2000)
            freteMessage.style.fontSize = '1em'
            loc.appendChild(freteMessage)
            
        }
    }
}

lupa.addEventListener('click', () => { cepFun() })

cep.addEventListener('keyup', (e) => { if (e.code == 'Enter' || e.code == 'NumpadEnter') cepFun() })

