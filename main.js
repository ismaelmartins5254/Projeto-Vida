var btn = document.querySelectorAll('button')
    document.addEventListener('click', (e) => {
        e.preventDefault()
        let takelittle = e.target
        let parent = takelittle.closest('div')
        console.log(parent)
        if(parent.classList == 'saleButton'){
            console.log('botao de promoçao')
        }
        if(takelittle.id == 'a1'){
            window.location.href = 'http://127.0.0.1:5500/index.html'
        }
        if(takelittle.id == 'a2'){
            window.location.href = 'html/produtos.html'
        }

    })