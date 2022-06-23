stage('build') {
    node {
        // 需要通过checkout scm获得github的变更
        checkout scm
        echo 'build'
    }
}
stage('test') {
    node {
        echo 'test'
    }
}
stage('deploy') {
    node {
        sh 'pwd'
        sh 'nvm use 14'
        // 环境变量与if...else
        if (env.BRANCH_NAME == 'master'){
            echo '自定义提示：当前分支为master'
        }else{
            echo '自定义提示：当前分支不是master'
        }
        // try...catch防止命令中断脚本
        try{
            sh 'pm2 delete tj'
        }catch(exc){
            echo '自定义提示：tj不存在于pm2 list中'
        }finally{
            // 其实加上 -f 就能强制重启了
            sh 'pm2 start index.js --name tj'
            echo '自定义提示：成功deploy！'
            // 命令较多的话可以写到一个sh文件中，然后 sh './deploy.sh'
        }
    }
}