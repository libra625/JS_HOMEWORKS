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

const saveButton = document.getElementById('saveButton')

saveButton.addEventListener('click', () => {
    const inputText = document.getElementById('noteFieldTextInput')
    const outputDiv = document.getElementById('emptyNoteOutput')

    const noteText = inputText.value.trim()

    if (noteText.length === 0) throw new Error('NOTE: Note is empty')

    const newElement = document.createElement('div')
    // newElement.style.height = '4vh'
    // newElement.style.border = '1px solid black'
    // newElement.style.marginBottom = '2vh'
    newElement.innerHTML = noteText
    outputDiv.prepend(newElement)

    // inputText.value = ''
})
