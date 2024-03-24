Welcome to Fast WebApp, a repo to fast deploy a webapp with Vite React as front-end, Django Python as back-end, and PostgreSQL as database.
The front is served by nginx for production.

Start by configuring the .env with your environment variables, as is done in the repo.


Launch the docker-compose to start the database with :
	- 'docker compose up -d --build'


The database is now launch, you can now make migrations in the back folder with :
	- 'python manage.py makemigrations'
	- 'python manage.py migrate'


You can launch the back in dev with :
	- 'python manage.py runserver YOUR_ADRESS:YOUR_PORT

Don't forget to put this adress and this port to your env variables at VITE_FRONT_DEV_API_URL like this :
	- 'VITE_FRONT_DEV_API_URL=http://YOUR_ADRESS:YOUR_PORT'
The front will need it.


You can launch the front dev with :
	- 'npm run dev'

You can now develop your webapp and launch the docker container if you need it for production.