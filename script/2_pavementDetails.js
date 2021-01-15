const whiteRoadLine = document.querySelector('.roadLine')

whiteRoadLine.animate([
    {
        transform: 'translateY(40px) scale(1)'
    },
    {
        opacity: 0.75
    },
    {
        transform: 'translateY(-150px) scaleX(.75) scaleY(.75)', opacity: 0
    }],
    {
        duration: 900,
        direction: 'normal',
        iterations: Infinity,
        easing: 'ease-in-out',
        delay: 500
    })
