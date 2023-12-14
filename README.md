# Uqbar Website

## Install dependencies 

```bash
# first-time setup only:
npm i -g yarn 
yarn 
yarn global add serve 
```

## Deploy server

```bash
git pull
yarn build
node server.js # the server (podcast and blog auth)
```

## Deploy frontend

```bash
# in a new session
serve -s ./build
```

## Test the server

```bash
npx jest --maxConcurrency 1
```