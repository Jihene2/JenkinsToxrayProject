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
                step([$class: 'XrayImportBuilder', endpointName: '', importFilePath: 'target/jihene.json', importInParallel: 'false', serverInstance: 'CLOUD-451b35e9-535d-4f52-bc37-28f4215cf1ea'])
                
            }
         }
       
        
         stage('cucumber report') {
            steps { 
                
               cucumber buildStatus: 'null', customCssFiles: '', customJsFiles: '', failedFeaturesNumber: -1, failedScenariosNumber: -1, failedStepsNumber: -1, fileIncludePattern: '**/*.json', pendingStepsNumber: -1, skippedStepsNumber: -1, sortingMethod: 'ALPHABETICAL', undefinedStepsNumber: -1
            }
         }  
   
            
     }
}
        
