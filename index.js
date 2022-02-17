const http = require('http')

// const a = undefined

// req - request, res - response
const server = http.createServer((req, res) => {
    // debugger // 断点
    const url = req.url // '/index.html?a=100'
    const path = url.split('?')[0] // '/index.html'

    // a() // bug

    res.end(path + '1234')
})

server.listen(3000)
console.log(' server listening on 3000 port')
