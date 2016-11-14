#!/bin/bash
#
# yum install net-tools
# yum group install "Development Tools"
# yum install git
# Install docker : https://docs.docker.com/engine/installation/linux/centos/
# usermod -aG docker [USER]
# curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash # install nvm from https://github.com/creationix/nvm link
# source ~/.bashrc
# nvm install 6.3.1
# npm install
#    do we need next two lines?
# npm install rimraf
# npm install cross-env
# 

DIRNAME="$(dirname $0)"
CWD="$(pwd)"
cd "$DIRNAME/automatedbuild"
BUILD_HOME="$(pwd)"
cd "$CWD"
PROJECT_URL='https://github.com/colinpbarry/experiment-101-mern-starter-material-ui.git'
PROJECT_NAME='experiment-101-mern-starter-material-ui'
PROJECT_DIR="$BUILD_HOME/$PROJECT_NAME"
echo $BUILD_HOME
mkdir -p "$BUILD_HOME"

cd $BUILD_HOME
echo "rm -r $PROJECT_DIR"
if [ -d "$PROJECT_DIR" ]; then
    rm -rf "$PROJECT_DIR" || { echo "$PROJECT_DIR: unable to remove. exiting"; exit 1; }
fi

echo "checking out project"
cd "$BUILD_HOME"
git clone https://github.com/colinpbarry/experiment-101-mern-starter-material-ui.git || { echo "git failed"; exit 2; }

cd "$PROJECT_NAME"

# npm install --save cross-env
echo "building docker image"
docker-compose build

echo "running docker image"
docker-compose up
