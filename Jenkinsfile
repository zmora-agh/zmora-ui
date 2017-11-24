pipeline {
		agent any
		tools {nodejs "default"}
		stages {
				stage('Install') {
						steps {
								sh 'npm install'
						}
				}
				stage('Build') {
						steps {
								sh 'npm run build'
						}
				}
				stage('Lint') {
						steps {
								sh 'npm run lint'
						}
				}
		}
}
