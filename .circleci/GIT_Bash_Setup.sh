#!/bin/bash
#===============================================================================
#title           : GIT_Bash_Setup.sh
#description     : It'll invoke the Git bash to exeute SSH_Deploy.sh
#author          : RamanaReddy V
#date            : 08-07-2021
#version         : 0.1    
#usage           : bash GIT_Bash_Setup.sh
#===============================================================================

cd /
echo "================== Started Deployment using  GIT BASH ======================"
echo "$HOME"
echo "cd $HOME && ls"
C/"Program Files"/Git/bin/bash.exe $HOME/repo/comfyhouse@0.1.0/.circleci/SSH_Deploy.sh

echo "================== End Deployment using  GIT BASH ======================"

