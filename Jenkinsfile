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
                jiraComment body: 'this is from jenkins', issueKey: 'TALAC-816'
                git branch: 'main', credentialsId: 'MyGitHub', url: 'https://github.com/Jihene2/JenkinsToxrayProject.git'
                bat'mvn test'
                step([$class: 'XrayImportBuilder', endpointName: '/junit', importFilePath: 'target/surefire-reports/TEST-runcukes.RunCukesTest.xml', importInParallel: 'false', importToSameExecution: 'false', projectKey: 'TALAC', serverInstance: 'SERVER-451b35e9-535d-4f52-bc37-28f4215cf1ea', testExecKey: 'TALAC-814'])
                
                
   
            }
        }
        
    }
}
