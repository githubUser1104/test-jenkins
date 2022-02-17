# test-jenkins

## 步骤
- 初始化
```sh
npm init
# 参考示例，完善index.js和Jenkinsfile
git init
git add .
git commit -m "first commit"
git remote add origin git@github.com:githubUser1104/test-jenkins.git
git push -u origin master
```

- index.js示例
```js
const http = require('http')
const server = http.createServer((req, res) => {
    // debugger // 断点
    const url = req.url // '/index.html?a=100'
    const path = url.split('?')[0] // '/index.html'
    res.end(path + ' say: Hello world!')
})
server.listen(3000)
console.log(' server listening on 3000 port')
```

- Jenkinsfile示例
```
Jenkinsfile (Declarative Pipeline)
pipeline {
    agent { docker 'node:6.3' }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
```