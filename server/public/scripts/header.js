const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headLeft = document.createElement('div')
headLeft.className = 'header-left'

const headerLogo = document.createElement('img')
headerLogo.src = '/logo.png'

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'UnEarthed'

// header left
headLeft.appendChild(headerLogo)
headLeft.appendChild(headerTitle)

const headRight = document.createElement('div')
headRight.className = 'header-right'

// button
const headerButton = document.createElement('Home')
headerButton.textContent = 'Home'
headerButton.addEventListener('click', function handleClick(event){
    window.location = '/'
})

//head right
headRight.appendChild(headerButton)

// head container
headerContainer.appendChild(headLeft)
headerContainer.appendChild(headRight)

// header
header.appendChild(headerContainer)