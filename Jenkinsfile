pipeline {
    agent any

    environment {
        IMAGE_NAME = "pradeep1155/notes-app:v1"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Image') {
            steps {
                sh 'sudo podman build -t $IMAGE_NAME .'
            }
        }

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                    echo "$DOCKER_PASS" | sudo podman login docker.io -u "$DOCKER_USER" --password-stdin
                    '''
                }
            }
        }

        stage('Push Image') {
            steps {
                sh 'sudo podman push $IMAGE_NAME'
            }
        }

        stage('Logout') {
            steps {
                sh 'sudo podman logout docker.io || true'
            }
        }
    }
}
