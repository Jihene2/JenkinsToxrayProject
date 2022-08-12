pipeline {
    agent any

    stages {
        stage('checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'MyGitHub', url: 'https://github.com/Jihene2/JenkinsToxrayProject.git']]])
            }
        }
         stage('build') {
            steps {
                git branch: 'main', credentialsId: 'MyGitHub', url: 'https://github.com/Jihene2/JenkinsToxrayProject.git'
                bat'mvn test'
                jiraComment body: 'this is from jenkins', issueKey: 'Essai'
   
            }
        }
        
    }
}
