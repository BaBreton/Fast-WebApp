#!/bin/sh

export DB_HOST=db
export DB_PORT=5432
python manage.py makemigrations
python manage.py migrate
gunicorn back.wsgi:application --bind 0.0.0.0:3000 --workers 4 --worker-class=gevent