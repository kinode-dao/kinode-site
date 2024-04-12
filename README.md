# Kinode Website

## Setup

### First-time setup
```bash
npm i -g yarn 
yarn 
yarn global add serve 
```
### Create DBs
```bash
node createTestDb.js
node createDb.js
```
### Create .env file
```bash
echo "SECRET_KEY=\"$(openssl rand -base64 32)\"" > .env
```
### Set up Caddy
```bash
cp Caddyfile.template /etc/caddy/Caddyfile
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
# 0. Test the server
    npx jest
# 1. Do it again. Just to be sure.
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