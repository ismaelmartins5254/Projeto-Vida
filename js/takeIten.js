document.addEventListener('click', (e) => {
    e.preventDefault()
    let takeElement = e.target
    let parent = takeElement.closest('div')
    if(parent.classList == 'links'){
        return
    }
    localStorage.setItem('buyPage', parent.innerHTML)
    window.location.href = '../html/buyPage.html'
    
})

