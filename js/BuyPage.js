let info = document.getElementById('info')
const lupa = document.getElementById('lupa')
const cep = document.getElementById('cep')
const frete = document.getElementById('frete')
const message = document.getElementById('message')
const loc = document.getElementById('loc')
let End = document.getElementById('End')
let BuyNow = document.getElementById('BuyNow')
let quantG = document.getElementById('quantG')
let addCar = document.getElementById('addCar')  
let car = document.getElementById('car')  
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


function creatElementsCep(resp) { //creat element case sucess
    
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

BuyNow.addEventListener('click', (e) => {
    e.preventDefault()
    let me = document.createElement('span')
    me.innerHTML = 'Pagina de compra está indisponível &#128531'
    me.classList.add('fail')
    message.appendChild(me)
    setTimeout(() => {
        me.remove()
    }, 2000)
})

// related items shopping cart page 
addCar.addEventListener('click', (e)=>{
    pageCar()
    let valueCar = document.getElementById('valueCar')
    e.preventDefault()
    let quant = parseInt(quantG.value)
    localStorage.setItem('quant', quant)
    valueCar.textContent = localStorage.getItem('quant')
})

document.onload = function(){
    let valueCar = document.getElementById('valueCar')
    valueCar.textContent = localStorage.getItem('quant')
}() //auto run

function creatPage(itens){
    let div = document.createElement('div')
    div.classList.add('containerCar')
    div.innerHTML = `${itens}`
    localStorage.setItem('carPage', div.innerHTML)
}

function pageCar(){
    let img = localStorage.getItem('buyPage')
    creatPage(img)
}

car.addEventListener('click', (e)=>{
    let me = document.createElement('span')
    e.preventDefault()
    
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
    
})