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
                step([$class: 'JiraIssueUpdateBuilder', jqlSearch: 'issue = TALAC-814'])
                jiraIssueSelector(issueSelector: [$class: 'ExplicitIssueSelector', issueKeys: 'TALAC-814'])
                step([$class: 'XrayImportBuilder', endpointName: '', importFilePath: 'target/jihene.json', importInParallel: 'false', serverInstance: 'SERVER-451b35e9-535d-4f52-bc37-28f4215cf1ea'])
                
                
   
            }
        }
        
    }
}
