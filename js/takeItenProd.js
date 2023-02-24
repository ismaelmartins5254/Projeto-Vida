document.addEventListener('click', (e) => {

    let message = document.getElementById('men')
    let me = document.createElement('span')
    me.innerHTML = ''
    me.id = 'mens'

    e.preventDefault()
    let takeElement = e.target
    let parent = takeElement.closest('div')
    if (takeElement.id == 'ini') {
        window.location.href = '../Codigos Principais/index.html'
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
    } if (takeElement.id == 'mens') {
        return
    }if(takeElement.id == 'prod') window.location.href = '../html/produtos.html'



    localStorage.setItem('buyPage', parent.innerHTML)
    let img = document.createElement('img')
    img.src = '../imagens/loading.svg'
    img.classList.add('loading')
    parent.appendChild(img)
    setTimeout(() => {
        window.location.href = '../html/buyPage.html'
    }, 500)
})