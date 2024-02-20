# Kinode Website

## Setup

```bash
# first-time setup only:
npm i -g yarn 
yarn 
yarn global add serve 
# create the db's
node createTestDb.js
node createDb.js
# create the .env file with a SECRET_KEY random string
echo "SECRET_KEY=\"$(openssl rand -base64 32)\"" > .env
```

## Develop
    
```bash
# 1. Start the server
    node server
# 2. Start the frontend
    # in a new session
    yarn start
```

## Deploy

```bash
# 1. Test the server
    npx jest
    # Do it again just to be sure.
    npx jest
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