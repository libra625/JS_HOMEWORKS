(function () {
    const form = document.getElementById('form')
    const dataKey = 'formData'

    if (form !== null) {
        form.addEventListener('submit', (event) => {
            event.preventDefault()

            const elements = event.target.querySelectorAll('input, select, textarea')
            const data = Array.from(elements).reduce((accumulator, item) => {
                accumulator[item.name] = item.value
                return accumulator
            }, {})

            localStorage.setItem(dataKey, JSON.stringify(data))

            // setTimeout(() => {
            //     window.location.href = 'http://localhost:63342/JS_HOMEWORKS/src/sub.html'
            // }, 3000)
        })
    }

    const generateUl = document.getElementById('generateUl')

    if (generateUl !== null) {
        generateUl.addEventListener('click', (event) => {
            const data = JSON.parse(localStorage.getItem(dataKey))

            const dataContainer = document.querySelector('.formData')

            if (!data) {
                dataContainer.innerHTML = 'NO DATA'
                dataContainer.classList.add('no-data')
                return
            }

            if (document.querySelector('.data-ul')) {
                document.querySelector('.data-ul').remove()
            }

            const ul = document.createElement('UL')
            ul.classList.add('data-ul')

            for (const key in data) {
                if (data[key] === '') {
                    dataContainer.innerHTML = 'EMPTY DATA ENTER ALL THE FIELDS'
                    dataContainer.classList.add('no-data')
                    return
                }

                const li = document.createElement('LI')
                li.innerHTML = `<b>${key}</b> : <i>${data[key]}</i>`
                ul.append(li)
            }

            dataContainer.append(ul)
        })
    }

    const clearStorage = document.getElementById('clearButton')

    clearStorage.addEventListener('click', (event) => {
        localStorage.clear()
    })
})()
