FROM python:3.11
WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
COPY ./api api
COPY ./back back
COPY manage.py manage.py
COPY start-api.sh /app/start-api.sh
RUN chmod +x /app/start-api.sh
RUN python manage.py collectstatic --noinput
CMD ["/app/start-api.sh"]