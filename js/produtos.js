function r(){
    const buyIten = localStorage.getItem('buyPage')
    let all = document.getElementById('all')
    let div = document.createElement('div')
    div.classList.add('iten')
    div.innerHTML = buyIten
    all.appendChild(div)
}