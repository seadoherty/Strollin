const movePerson = person => {
    var screenClass = document.querySelector('.movieScreen')
    var screenWidth = screenClass.clientWidth
    var partOfBody = document.querySelector(person.className)
    var halfScreen = screenWidth / 2
    var partLeftSide = halfScreen + person.positionLeft

    partOfBody.style.left = partLeftSide + 'px'
    partOfBody.style.top = person.positionTop + 'px'
    partOfBody.style.backgroundColor = person.color

    partOfBody.animate([
        { 
            transform: person.movementBegin 
        },
        { 
            transform: person.movementEnd 
        } ], 
    {
        duration: person.movementDuration,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
    })
}