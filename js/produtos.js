var btn = document.querySelectorAll('button')

for(i in btn){
    btn[i].addEventListener('click', (e) => {
        e.this
        const path = e.composedPath()
        localStorage.setItem('path', path)
        console.log(localStorage.getItem('path'))
    })
}