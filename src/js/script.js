(function () {
    const buttonQuestion = document.querySelector('[data-question]')
    const buttonAnswer = document.querySelector('[data-answer]')
    const buttonSubmit = document.querySelector('[data-survey]')
    const inputTitle = document.querySelector('[name="surveyTitle"]')
    const form = document.querySelector('.form')

    const surveyQuestions = []
    const surveyAnswers = []
    let index = 0
    let indexAnswer = 0

    const isEnoughAnswers = () => {
        if (index > 0) {
            let count = 0
            for (let i = 0; i < surveyAnswers.length; i++) {
                if (surveyAnswers[i].questionId === index - 1) count++
            }
            console.log(count >= 2)
            return count >= 2
        }
        return true
    }

    form.addEventListener('click', (event) => {
        event.preventDefault()

        if (event.target === buttonQuestion) {
            if (!isEnoughAnswers()) {
                alert('not enough answers')
                return
            }

            form.insertAdjacentHTML('beforeend', `
            <label>
                <span>Question: </span>
                <input name="surveyQuestion" placeholder="Survey Question" type="text" data-id-q="${index}">
            </label>`)

            const newQuestion = {
                id: index
            }

            surveyQuestions.push(newQuestion)
            index += 1
        }

        if (event.target === buttonAnswer) {
            form.insertAdjacentHTML('beforeend', `
            <label class="answer">
                <span>Answer: </span>
                <input name="surveyAnswer" placeholder="Survey Answer" type="text" data-id-a="${indexAnswer}">
            </label>`)

            const newAnswer = {
                id: indexAnswer,
                questionId: index - 1
            }

            surveyAnswers.push(newAnswer)
            indexAnswer += 1
        }

        if (event.target === buttonSubmit) {
            if (inputTitle.value.trim() === '') {
                alert('enter a proper name for this survey')
                return
            }

            if (!isEnoughAnswers()) {
                alert('not enough answer')
                return
            }

            for (let i = 0; i < index; i += 1) {
                if (form.querySelector(`[data-id-q="${i}"]`).value === '') {
                    alert('fill all fields')
                    return
                }

                surveyQuestions[i].text = form.querySelector(`[data-id-q="${i}"]`).value
            }

            for (let i = 0; i < indexAnswer; i += 1) {
                if (form.querySelector(`[data-id-a="${i}"]`).value === '') {
                    alert('fill all fields')
                    return
                }

                surveyAnswers[i].text = form.querySelector(`[data-id-a="${i}"]`).value
            }
            console.log(surveyQuestions)
            console.log(surveyAnswers)

            form.innerHTML = ''
            form.insertAdjacentHTML('beforeend', `
                <h1>${inputTitle.value}</h1>
                <ol>
                ${surveyQuestions.map((q) => {
        const answersForQuestion = surveyAnswers.filter((a) => a.questionId === q.id)
        if (answersForQuestion.length > 0) {
            return `
                      <li>${q.text}
                        <ul>
                          ${answersForQuestion.map((a) => `<li>${a.text}</li>`).join('')}
                        </ul>
                      </li>`
        }
        return `<li>${q.text}</li>`
    }).join('')}
              </ol>`)
        }
    })
    console.log(surveyAnswers)
    console.log(surveyQuestions)
}())
