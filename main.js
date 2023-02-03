var btn = document.querySelectorAll('button')

for(i in btn){
    btn[i].addEventListener('click', (e) => {
        e.this
        const path = e.composedPath()
        page(path[1])
    })
}

function page(item){
    const fone = document.querySelector('div.texto-fone')
    const celular_promocao = document.querySelector('div.texto-prom')
    const mais_vendidos = document.querySelector('section.bestseller')
    const promocao_geral = document.querySelector('section.sale')
    console.log(item)
    switch (item) {
        case fone:
            console.log("fone")
            break;
        case celular_promocao:
            console.log("celular_promocao")
            break;
        case mais_vendidos:
            console.log("mais_vendidos")
            break;
        case promocao_geral:
            console.log("promocao_geral")
            break;
        default:
            break;
    }
}