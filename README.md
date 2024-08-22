 # node-express-mongo 

## Quick Introduction

In this project i will build an Ecommerce website using Javascript (ES6) for the frontend and the NodeJS framework express for the backend... as IDE i will use VsCode... the project require to have nodeJS installed on your local computer...in order to avoid conflicts with my other node projects, i will developp the Project from within a ***Docker Container***... later in the Project i will create a ***CI/CD Pipeline*** that will **build** our Project, **Test** it, and finally **Deploy** it to the AWS Cloud In this Document i will just Document the Steps of my Project.

## Project Steps

### Step1 - create the Folder Structure and display a text on the screen

- create the ***frontend/src/index.html*** file that will contains the message you want to display on the screen
- run ***npm init*** to make your project an npm project
- install the ***live-server*** package as a dev dependency
- add the ***start script*** in package.json.. "start": "live-server src --verbose"
- run your application using ***npm start***

### Step2 - create the static home page

- we'll use **sass** and **bootstrap** to design our page
- install the bootstrap package ***npm install bootstrap***
- import it in your main scss file ***@import "../node_modules/bootstrap/scss/bootstrap.scss"***
- install the sass package globally ***npm install -g sass*** and run ***sass --version***
- start watching for style changes with sass ***sass --watch public/scss:public/css***
- link your ***style.css*** file in ***index.html***
- test if bootstrap load correctly