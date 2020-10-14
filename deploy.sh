#!/bin/sh

git pull origin master

source venv/bin/activate && sudo pip3 install -r requirements.txt

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py collectstatic

