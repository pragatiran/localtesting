pipeline {
    agent any

    tools {
        nodejs "Default"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                cmd 'npm ci'
                cmd 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                cmd 'npx playwright test'
            }
        }
    }

    post {
        always {
            junit 'path/to/your/test-results/results.xml'
        }
    }
}
