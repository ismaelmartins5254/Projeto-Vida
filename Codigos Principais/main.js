function textoFone() {
    window.location.href = '../html/fone.html'
}
function CelBtn() {
    window.location.href = '../html/celulares.html'
}

/* Take item from HTML its add all parent in the new page */

let itens = document.getElementById('bestsellerIten')

itens.addEventListener('click', (e) => {
    e.preventDefault()
    let target = e.target
    let parent = target.closest('div')
    localStorage.setItem('buyPage', parent.innerHTML)
    let img = document.createElement('img')
    img.src = '../imagens/loading.svg'
    img.classList.add('loading')
    parent.appendChild(img)

    setTimeout(() => {
        window.location.href = '../html/buyPage.html'
    }, 500)
})