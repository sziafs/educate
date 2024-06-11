## Description
Lessons microservice built using Nest.js

## Running the app

```bash
# start the containers
docker compose up -d

# apply the migrations
yarn prisma:migrate

# run script to seed dump data
yarn prisma:seed
```

## Stopping the app
```bash
# stop the containers
docker-compose down
```

## Accessing DB
```bash
# built-in GUI to view and edit the data
yarn prisma:open
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

MIT-licensed open source project to practice my skills. If you'd like to see the inspiration platform, please [access here](https://app.digital-launchpad.com).

## Stay in touch

Author - [Felipe Silveira](https://github.com/sziafs)

## License

This project is [MIT licensed](LICENSE).
