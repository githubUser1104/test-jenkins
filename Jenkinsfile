stage('build') {
    node {
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