pipeline {
    agent any

    tools {
        nodejs "Default"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
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
            junit 'results/test-results/results.xml'
        }
    }
}
