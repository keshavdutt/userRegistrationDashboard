# The Ultimate Nodejs Starter Template
Can also be used for production level projects

The template contains following folder
- **bin** ⇒ www file ⇒ logic for server and port
- **config** ⇒ configuration file ⇒ hold all the config and global variables if any
- **controllers** ⇒ to hold all the controlling logic
- **mongo** ⇒ model ⇒ to hold all the models & index ⇒ hold the connection logic to db
- **routes** ⇒ to hold all the routes
- **services** ⇒ contains all the services of the application
- **utils** ⇒ common utilities if any

## Flow of Events
```
npm start ⇒ node ./bin/www ⇒ www ⇒ app.js ⇒ mongo(index.js)
```

## Installation

Install the dependencies and start the server.

```sh
cd node-template
npm install
node app
```

## Setup Environments files
Create env files. Follow `.env.$.example` files to create env files. Create `.env.$` (exclude .example) and copy the content from corrosponding .example file to newly created file and replace the values with your inputs.

Note: By default, `.env.development` will run 

To run `.env.staging` or `.env.production`, pass env var `NODE_ENV` as `staging` or `production` respectively.
Eg.

```
NODE_ENV=staging node app.js
```