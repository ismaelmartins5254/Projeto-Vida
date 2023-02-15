document.addEventListener('click', (e) => {

    let loading = document.getElementById('loading')
    let message = document.getElementById('men')
    let me = document.createElement('span')
    me.innerHTML = ''

    e.preventDefault()
    let takeElement = e.target
    let parent = takeElement.closest('div')
    if (takeElement.id == 'ini') {
        window.location.href = '../index.html'
        return
    } if (takeElement.id == 'info') {
        me.innerHTML = 'Página de informações está indisponível'
        me.classList.add('fail')
        message.appendChild(me)
        setTimeout(() => {
            me.style.display = 'none'
        }, 2000)
        return
    } if (takeElement.id == 'prod') {
        me.innerHTML = 'Você já está na página de Produtos :)'
        me.classList.add('fail')
        message.appendChild(me)
        
        setTimeout(() => {
            me.style.display = 'none'
        }, 2000)
        return
    }
    let produtos = document.getElementById('produtos')
    localStorage.setItem('buyPage', parent.innerHTML)
    let img = document.createElement('img')

    img.src = '../imagens/loading.svg'
    loading.appendChild(img)
    setTimeout(() => {
        window.location.href = '../html/buyPage.html'

    }, 2000)

})