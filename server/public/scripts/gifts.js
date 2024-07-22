

const renderGifts = async()=>{
    const response = await fetch('/gifts')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if(data){
        data.map(gift=>{
            // for each gift, create a div with the class name card
            const card = document.createElement('div')
            card.classList.add('card')

            // top-container
            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            // bottom-container
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            // set the background to the gift's image
            topContainer.style.backgroundImage = `url(${gift.image})`

            // name
            const name = document.createElement('h3')
            name.textContent = gift.name
            bottomContainer.appendChild(name)

            // price
            const pricePoint = document.createElement('p')
            pricePoint.textContent = 'Price: ' + gift.pricePoint
            bottomContainer.appendChild(pricePoint)

            // audience
            const audience = document.createElement('p')
            audience.textContent = 'Great For: ' + gift.audience
            bottomContainer.appendChild(audience)
            
            // add a button to a different url
            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/gifts/${gift.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
        })
    }
    else{
        const message = document.createElement('h2')
        message.textContent ='No Gifts Available 😞'
        mainContent.appendChild(message)
    }
}






renderGifts()