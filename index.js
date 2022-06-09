// index.js
const http = require('http')
const server = http.createServer((req, res) => {
    // debugger // 断点
    const url = req.url // '/index.html?a=100'
    const path = url.split('?')[0] // '/index.html'
    res.end(path + ' say: Hello world!!')
})
server.listen(3090)
console.log(' server listening on 3090 port')
