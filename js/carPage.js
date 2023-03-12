function onload(){
    let all = document.getElementById('all')
    let item = localStorage.getItem('carPage')
    all.classList.add('iten')
    all.innerHTML = item

}