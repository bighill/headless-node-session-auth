# node-headless-sample

This is an example of headless node app.
A React frontend is proxied through Nginx such that both the _frontend_ and _backend_ can be served from the same domain. AJAX and web socket communication is authenticated with sessions.

The goal of this project is to create a useful development environment that can relatively easily be deployed to a production environment.

## The Backend

- Node / Typescript
- Passport session auth with local strategy
- MongoDB for User records and session storage
- API enpoints and socket connection are protected by session authentication
- Tests cover standard operation and test for various Bad Request scenarios
- Tests utilize a separate Mongo database run in memory

## Backend structure notes

- The overall structure is setup to benefit tests and suite this particular application. This structure is definitely not one-size-fits-all; it only serves as an example.
- The Validate utility is overly simple and not recommended for production.
- The GlobalReply utility is an opinionated approach, YMMV.
- During normal operation the app will connect to the MongoDB at `process.env.MONGO_URL`. When tests are run, that variable is overwriten to use the in-memory database thanks to `@shelf/jest-mongodb`.
- The tests that involve database interaction have an afterAll() that close the database connection. Without that, some tests will _hang_ and not close predictably.

## The Frontend

- React (create-react-app)
- Simple tests on each component
- Development mode hot loading proxied through Nginx

## Github Actions

Included are some working samples of useful CI/CD tasks for development (though deployment tasks are not included).

When a PR is created in Github, these _actions_ will fire:

- Test backend
- Test frontend
- NPM audit backend
- NPM audit frontend

## Dev Usage

### Build if needed

```bash
docker-compose build
```

### Run

```bash
docker-compose up -d
```

### Watch container console logs

```bash
docker-compose logs -f frontend
docker-compose logs -f backend
docker-compose logs -f nginx
docker-compose logs -f mongo
```

### Test

```bash
docker-compose exec frontend npm test
docker-compose exec backend npm test
```

### Browser test with web client app

_Open [http://localhost:8080](http://localhost:8080) in a browser_.

## Hierarchy

![Hierarchy Image](overview.drawio.svg)
