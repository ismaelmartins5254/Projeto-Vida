var btn = document.querySelectorAll('button')

for(i in btn){
    btn[i].addEventListener('click', (e) => {
        e.this
        const path = e.composedPath()
        console.log(path[1])
        page(path[1])
    })
}

function page(item){
    
}