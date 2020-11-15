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

![Hierarchy Image][/overview.drawio.svg]
