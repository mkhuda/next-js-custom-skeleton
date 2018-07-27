# next-js skeleton

> This skeleton and documentation is based on the [next-js](https://github.com/zeit/next.js/).

## Prerequisite

### Requirements
- Node Version 8.11.+
- NPM or Yarn (But I recommend using NPM)
- Docker & Docker Compose

## How to use

### Base Installation
Installation are quiet easy, you just:
```bash
npm install
# or
yarn
```

### Build as Development

```bash
npm run dev
# or
yarn dev
```
### Build as Production
Build as production means to build this project onto Staging or Production Environment

```bash
npm run build
# or
yarn build
```

### Docker build production
```bash
# build
docker build -t next-app .
docker-compose up -d
```

Default host are http://localhost:3000

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

