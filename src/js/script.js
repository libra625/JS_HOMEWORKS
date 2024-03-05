// (function () {
//     const container = document.getElementById('container')
//
//     container.style.display = 'flex'
//     container.style.flexDirection = 'column'
//     container.style.width = '80vh'
//     container.style.gap = '2vh'
// })()
// for myself
// just make it in column and edit it's size

const checkNumber = () => {
    const inputCheckNumber = document.getElementById('checkNumber').value

    if (isNaN(inputCheckNumber)) return 'Not a number'
    if (inputCheckNumber.length === 0) return 'empty'

    return inputCheckNumber % 2 === 0 ? 'It is EVEN' : 'It is ODD'
}
