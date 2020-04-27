This project is just for testing

## Simple project

In the project I used Docker to setup and deploy Django app supported by ReactJS frontend to Heroku.

### Local develoment

To Runs the app in the development mode.<br />
```
docker-compose up
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Deploy to heroku

I created a separate `Dockerfile` for the deployment to Heroku.
Just push the code as you usually do. <br />
You just need to tell Heroku app to use Docker rather than one of Heroku's language-specific build packs. <br />
```.env
heroku stack:set container
```
