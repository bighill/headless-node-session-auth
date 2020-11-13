# node-headless-sample

## Dev Usage

### Build if needed

```bash
docker-compose build
```

### Run

```bash
docker-compose up -d
```

### Watch container logs for node console logs and typescript errors

```bash
docker-compose logs -f node
```

### Test (using the host machines npm/node)

```bash
cd server
npm test
```

### Browser test with web client app

_Open [http://localhost:8080](http://localhost:8080) in a browser_.
