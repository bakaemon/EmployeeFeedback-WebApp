# TCH2204 Group 1
Technologies used:
- [Node](https://nodejs.org/)
- [Express](http://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [VueJS](https://vuejs.org/)
  - [Vuetify](https://vuetifyjs.com/) as a Vue Component Framework

The application consists of an Express REST API that is consumed by a VueJS Single Page Application.

## Installation

This repository can be used via cloning the code base or copying it as a GitHub template. The process is identical excluding the first step:s

```sh
# clone this repository
git clone https://github.com/bakaemon/EmployeeFeedback-WebApp/

# run the setup script
npm run setup

# if the setup script fails:
# install dependencies in both sub-projects
npm ci
npm ci --prefix client/

# copy env file
cp .env.example .env
```

### Other Dependencies
 - MongoDB
 - The [Vue CLI](https://cli.vuejs.org/)

## Development

This repo comes with a helper script to run both the Vue development server and Express application in the same terminal:

```sh
npm run dev
```

Either application can also be run individually:

```sh
# Start the Express application with reloading via nodemon
npm run dev:server

# Start the Vue application with HMR and Reloading
npm run dev:client
```
