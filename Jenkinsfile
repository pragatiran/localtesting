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

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            // Adjust the path below based on your Playwright reporter config
            junit 'results/test-results/results.xml'
        }
    }
}
