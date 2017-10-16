# zmora-ui
Zmora online judge web interface

## Setting up development environment (Ubuntu)
### Install docker
* Install packages to allow `apt` to use a repository over HTTPS:
```
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
```
* Add Docker’s official GPG key:
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
* Add docker repository
```
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```
* Install docker
```
sudo apt-get update
sudo apt-get install docker-ce
```

### Install docker-compose
```
sudo curl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```
### Start project
In project root directory run
```
docker-compose up
```

Note: If you have been using other method of running project you may have to remove node_modules directory
```
rm -rf node_modules
```

### Running linter
You can run linter while project is running with
```
docker-compose exec ui yarn run lint
```
