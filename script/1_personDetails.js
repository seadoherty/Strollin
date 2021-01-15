const person = {
    rightPinkArm: {
        className: '.pink',
        positionLeft: 505,
        positionTop: 270,
        color: '#ee689b',
        movementBegin: 'scale(.6) translateY(0)',
        movementEnd: 'translateY(-50px) scale(1)',
        movementDuration: 500
    },
    leftGreenFoot: {
        className: '.green',
        positionLeft: 330,
        positionTop: 455,
        color: '#81c784',
        movementBegin: 'scale(.6) translateY(0)',
        movementEnd: 'translateY(-50px) scale(1)',
        movementDuration: 500
    },
    leftPurpleArm: {
        className: '.purple',
        positionLeft: 330,
        positionTop: 270,
        color: '#7617cf',
        movementBegin: 'translateY(-50px) scale(1)',
        movementEnd: 'scale(.6) translateY(0)',
        movementDuration: 500
    },
    rightBlueFoot: {
        className: '.blue',
        positionLeft: 505,
        positionTop: 455,
        color: '#64b5f6',
        movementBegin: 'translateY(-50px) scale(1)',
        movementEnd: 'scale(.6) translateY(0)',
        movementDuration: 500
    },
    centerOrangeHead: {
        className: '.orangeHead',
        positionLeft: 428,
        positionTop: 180,
        color: '#ffb74d',
        movementBegin: 'translateY(0) scale(0.9)',
        movementEnd: 'scale(1.15) translateY(10px)',
        movementDuration: 750
    },
    centerRedBody: {
        className: '.redBody',
        positionLeft: 404,
        positionTop: 245,
        color: '#f00538',
        movementBegin: 'scale(.90) translateY(5px)',
        movementEnd: 'translateY(-5px) scale(1)',
        movementDuration: 750
    },
}

// animate each body part
movePerson(person.rightPinkArm)
movePerson(person.leftGreenFoot)
movePerson(person.leftPurpleArm)
movePerson(person.rightBlueFoot)
movePerson(person.centerOrangeHead)
movePerson(person.centerRedBody)