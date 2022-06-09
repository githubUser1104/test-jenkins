pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                try{
                    sh 'pm2 delete tj'
                }catch(exc){
                    echo "pm2 list has no project named tj!"
                }finally{
                    sh 'pm2 start index.js --name tj'
                }
            }
        }
    }
}