(function () {
    const addQuestion = document.querySelector('[data-custom-question]')
    const addAnswer = document.querySelector('[data-custom-answer]')
    const createSurvery = document.querySelector('[data-custom-create-survey]')
    const form = document.querySelector('.form')

    const questionsArray = []
    const answersArray = []
    // answers.push({ name: 'igor', surname: 'turbarov' })
    // console.log(answers)
    // console.log(answers[0].name)

    form.addEventListener('click', (event) => {
        event.preventDefault()

        if (event.target === addQuestion) {
            form.insertAdjacentHTML('beforeend', `        
        <label>
            <span>Question: </span>
            <input name="surveyQuestion" placeholder="Survey Question" type="text">
        </label>`)
        }

        if (event.target === addAnswer) {
            form.insertAdjacentHTML('beforeend', `        
        <label class="answer">
            <span>Answer: </span>
            <input name="surveyAnswer" placeholder="Survey Answer" type="text">
        </label>`)
        }

        if (event.target === createSurvery) {
            const questions = form.querySelectorAll('[name="surveyQuestion"]')
            const answers = form.querySelectorAll('[name="surveyAnswer"]')
        }
    })
})()
