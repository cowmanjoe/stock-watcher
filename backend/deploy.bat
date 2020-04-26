start gcloud config set project beaming-source-275400
py manage.py makemigrations
py manage.py migrate
py manage.py collectstatic
gcloud app deploy
