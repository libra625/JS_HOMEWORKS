(function () {
    'use strict'

    const createTable = function () {
        const table = document.createElement('table')

        for (let i = 0; i < 10; i++) {
            const row = document.createElement('tr')

            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('td')

                cell.textContent = (i + 1) * (j + 1)
                row.appendChild(cell)
            }

            table.appendChild(row)
        }
        return table
    }

    const table = createTable()

    document.body.append(table)
})()
