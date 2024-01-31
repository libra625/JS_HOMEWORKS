'use strict'

const updateQueryString = function (url, key, value) {
    if (!URL.canParse(url)) throw new Error('Invalid URL')

    const urlToUpdate = new URL(url)

    urlToUpdate.searchParams.set(key, value)

    return urlToUpdate.toString()
}

console.log(updateQueryString('https://example.com/search?q=query&sort=ascending&page=2', 'abracadabra', '5'))
