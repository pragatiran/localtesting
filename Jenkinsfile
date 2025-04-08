pipeline {
    agent any

    tools {
        nodejs 'Default' // Use the Node.js version configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                // Clone the repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Run Playwright tests
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            // Archive test results
            junit '**/test-results/*.xml'
        }
    }
}
