(function () {
    'use strict'

    const name = 'Igor'

    const ul = document.getElementById('ulId')

    const ulAttributes = ul.attributes

    console.log(ulAttributes)

    const ulAttributesName = []
    const ulAttributesValues = []

    for (const ulAttribute of ulAttributes) {
        ulAttributesName.push(ulAttribute)
        ulAttributesValues.push(ulAttribute.value)
    }

    console.log('Ul attributes names: ')
    console.log(ulAttributesName)
    console.log('Ul attributes values: ')
    console.log(ulAttributesValues)

    ul.lastElementChild.textContent = `Привет меня зовут ${name}`

    ul.firstElementChild.setAttribute('data-my-name', name)

    ul.removeAttribute('data-dog-tail')
})()
