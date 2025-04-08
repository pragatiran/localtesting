pipeline {
     agent any
 
     tools {
         nodejs "Default"
     }
 
     stages {
         stage('Install Dependencies') {
             steps {
                 bat 'npm install'
                 bat 'npx playwright install'
             }
         }
 
 @@ -21,6 +22,7 @@
 
     post {
         always {
             // Adjust the path below based on your Playwright reporter config
             junit 'results/test-results/results.xml'
         }
     }
