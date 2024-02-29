(function () {
    'use strict'

    const bodyChildren = document.body.childNodes

    console.log(`Amount of body elements(with text) : ${bodyChildren.length}`)

    const ul = bodyChildren[1]

    console.log(`Amount of li in ul elements(with text) : ${ul.childNodes.length}`)

    for (const ulElement of ul.childNodes) {
        console.log(ulElement)
    }

    const arr = Array.from(ul.childNodes)

    const filteredArr = arr.filter((item) => item.nodeName === 'LI')

    console.log(`Amount of li in ul elements : ${filteredArr.length}`)

    const arrayOfTextOfLi = []

    for (const element of filteredArr) {
        arrayOfTextOfLi.push(element.textContent)
    }

    console.log(arrayOfTextOfLi)
})()
