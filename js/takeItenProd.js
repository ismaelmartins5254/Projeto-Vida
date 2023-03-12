document.addEventListener('click', (e) => {

    let message = document.getElementById('men')
    let me = document.createElement('span')
    me.innerHTML = ''
    me.id = 'mens'

    e.preventDefault()
    let takeElement = e.target
    let parent = takeElement.closest('div')

    if (takeElement.id == 'ini') {
        me.innerHTML = 'Redirecionando...'
        me.style.backgroundColor = '#853ef8'
        me.style.color = '#fff'
        me.style.width = '20em'
        me.style.textAlign = 'center'
        me.style.borderRadius = '5px'
        message.appendChild(me)
        setTimeout(() => {
            me.remove()
            window.location.href = '../Codigos Principais/index.html'
        }, 1000)
        return
    } if (takeElement.id == 'info') {
        me.innerHTML = 'Página de informações está indisponível &#128531;'
        me.classList.add('fail')
        message.appendChild(me)
        setTimeout(() => {
            me.style.display = 'none'
            me.remove()
        }, 2000)
        return
    } if (takeElement.id == 'produPage') { //quando tiver na pagina de produtos
        me.innerHTML = 'Você já está na página de Produtos :)'
        me.classList.add('fail')
        message.appendChild(me)

        setTimeout(() => {
            me.style.display = 'none'
            me.remove()
        }, 2000)
        return
    }
    if (takeElement.id == 'prod') {
        window.location.href = '../html/produtos.html'
        return
    }
    if (takeElement.id == 'car') {
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
    }

    if (parent.id == 'media') return
    if (parent.class == 'car') return
    if (parent.id == 'links') return
    if (takeElement.id == 'container') return
    if (takeElement.id == 'mens') return


    localStorage.setItem('buyPage', parent.innerHTML)
    let img = document.createElement('img')
    img.src = '../imagens/loading.svg'
    img.classList.add('loading')
    parent.appendChild(img)
    console.log(takeElement)
    setTimeout(() => {
        window.location.href = '../html/buyPage.html'
    }, 500)
})

document.onload = function () {
    let value = localStorage.getItem('quant')
    let valueCar = document.getElementById('valueCar')
    valueCar.textContent = value
}() //auto execução