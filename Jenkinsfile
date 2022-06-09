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