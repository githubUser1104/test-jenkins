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