#!/bin/bash
cd /home/exam
echo "INSTALLING NODE.JS"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

echo "INSTALLING APP"
git clone https://github.com/IEPSCF-Uccle-ADGESEC2-S1-2021/exam-student-files.git
cd
npm install --production
