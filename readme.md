# Instructions

### Running API

Using DockerCompose

- Go to API directory and open terminal
- Build the docker-compose image and run `docker-compose up`
- It should run the app but should not be able to connect to the DB till now.

Using NPM

- Run `npm install` & `npm run build`
- Create db `google-adwards-task` in your local mysql instance (You can import data from schema.sql file from the root directory)
- Run the app using `npm run start` or `npm run start:dev` command

### Running web

Using DockerCompose

- Go to Web directory and open terminal
- Build the docker-compose image and run `docker-compose up`
- It should the run the app in `localhost:4000`

Using NPM

- Run `npm install` and `npm run start`
