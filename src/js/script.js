(function () {
    const form = document.querySelector('[data-form]')

    form.addEventListener('submit', event => {
        event.preventDefault()

        const inputs = document.querySelectorAll('input')

        console.log(event)

        const result = document.querySelector('.form_result')

        inputs.forEach(input => {
            input.value === '' ? result.innerHTML = 'You need to fill all the fields' : result.innerHTML = 'WELCOME TO TEAM BUDDY'
        })
    })
}())
