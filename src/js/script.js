(function () {
    const form = document.querySelector('[data-form]')

    form.addEventListener('submit', event => {
        event.preventDefault()

        const inputs = document.querySelectorAll('input')

        let filledsAreFilled = true

        const result = document.querySelector('.form_result')

        inputs.forEach(input => {
            if (input.value === '') filledsAreFilled = false
        })

        filledsAreFilled ? result.innerHTML = 'WELCOME TO THE CLUB BUDDY' : result.innerHTML = 'FILL ALL THE FIELDS'
    })
}())
