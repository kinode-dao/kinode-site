# Kinode Website

## Install dependencies 

```bash
# first-time setup only:
npm i -g yarn 
yarn 
yarn global add serve 
# create the db's
node createTestDb.js
node createDb.js
```

## Deploy

```bash
# 1. Test the server
    npx jest --maxConcurrency 1
    # Do it again just to be sure.
    npx jest --maxConcurrency 1
# 2. IF tests pass, deploy server 
    git pull
    yarn build
    NODE_ENV=production node server.js # the server (podcast and blog auth)
# 3. Deploy frontend
    # in a new session
    serve -s ./build
    # for future updates and deployments, build it in a different session and then swap the server
    # (this is to avoid downtime)
```