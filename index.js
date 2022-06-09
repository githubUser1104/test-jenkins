// index.js
const http = require('http')
const server = http.createServer((req, res) => {
    // debugger // 断点
    const url = req.url // '/index.html?a=100'
    const path = url.split('?')[0] // '/index.html'
    res.end(path + ' say: Hello world!')
})
server.listen(3090)
server.on('listening', function() {
    let port = server.address().port
    console.log('服务器开始监听端口：' + port)
});