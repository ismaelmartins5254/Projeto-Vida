document.addEventListener('click', (e) => {

    let message = document.getElementsByClassName('message')

    e.preventDefault()
    let takeElement = e.target
    let parent = takeElement.closest('div')
    if (takeElement.id == 'ini') {
        window.location.href = '../index.html'
        return
    } if (takeElement.id == 'prod') {
        
        return
    }
    localStorage.setItem('buyPage', parent.innerHTML)
    window.location.href = '../html/buyPage.html'

})

