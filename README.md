# ChatUi

Chat-App is monorepo full stack application, created strictly for purposes of ***practice and discover of new technologies*** (that should justify uncreative repository name).<br> <br> Backend exploits **ExpressJS** framework connected to local **PostgreSQL** database. Communication between the `server` and `client` as regards of messaging is performed with **Socket.Io**. Client web application is generated and written using **Angular** and **Angular CLI**.


## :rocket: Run locally

#### Clone repository and start:
```Bash
git clone https://github.com/aleksaKis/chat-app.git && cd chat-app
yarn install && yarn start
```

Client should be available at [localhost:2200](http:localhost:2200)

## :bulb: Code scaffolding

Run `ng generate component component-name` to generate a new component.<br> You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## :hammer: Build

Run `yarn build` to build the project. The build artifacts will be stored in each package `dist/` directory.

## :page_with_curl: Running unit tests

Run `yarn test` to execute the unit tests via [Jest](https://jestjs.io/).
