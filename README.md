# test-jenkins

## 步骤
- 初始化
```sh
npm init
# 参考源码，完善index.js和Jenkinsfile
git init
git add .
git commit -m "first commit"
git remote add origin git@github.com:githubUser1104/test-jenkins.git
git push -u origin master
```

## Jenkinsfile
- Declarative写法

```
pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'pm2 start index.js --name tj'
            }
        }
    }
}
```

- groovy写法，可以方便地写if...else和try...catch

```groovy
stage('build') {
    node {
        // 需要通过checkout scm获得github的变更
        checkout scm
        if (env.BRANCH_NAME == 'master'){
            echo '自定义提示：当前分支为master'
        }else{
            echo '自定义提示：当前分支不是master'
        }
        try{
            sh 'pm2 delete tj'
        }catch(exc){
            echo '自定义提示：tj不存在于pm2 list中'
        }finally{
            sh 'pm2 start index.js --name tj'
            echo '自定义提示：成功build！'
        }
    }
}
```