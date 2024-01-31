'use strict'

const parseUrl = function (url) {
    if (!URL.canParse(url)) throw new Error('Invalid URL')

    const urlToParse = new URL(url)

    return {
        hash: urlToParse.hash,
        host: urlToParse.host,
        hostname: urlToParse.hostname,
        href: urlToParse.href,
        port: urlToParse.port,
        search: urlToParse.search,
        protocol: urlToParse.protocol,
        pathname: urlToParse.pathname,
        origin: urlToParse.origin
    }
}

const parseCurrentUrl = function () {
    if (!URL.canParse(window.location)) throw new Error('Invalid URL')

    return {
        hash: window.location.hash,
        host: window.location.host,
        hostname: window.location.hostname,
        href: window.location.href,
        port: window.location.port,
        search: window.location.search,
        protocol: window.location.protocol,
        pathname: window.location.pathname,
        origin: window.location.origin
    }
}

console.log(parseUrl('https://example.com:8080/path/name?query=123#hash'))
console.log(parseCurrentUrl())
