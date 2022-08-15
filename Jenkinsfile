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
                jiraComment body: 'this is from jenkins', issueKey: 'TALAC-814'
                git branch: 'main', credentialsId: 'MyGitHub', url: 'https://github.com/Jihene2/JenkinsToxrayProject.git'
                bat'mvn test'
                step([$class: 'JiraIssueUpdateBuilder', jqlSearch: 'issue = $TALAC-814'])
                jiraComment body: 'test ended', issueKey: 'TALAC-814'
                
                
   
            }
        }
        
    }
}
