# Stoic Server

It's just The Daily Stoic by Ryan Holiday passages hosted via Node JS json:server

## 1. Pre-reqs
1. Node JS: https://nodejs.org/en/download/
2. npm i json-server
3. Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli


### 1.1 JSON to host

Recommended structure: https://jsonapi.org/

There's no need the structure, but it's helpful to know that the first key layer is a "web-page".

## 2. Heroku Required files

### 2.1 package.json

1. npm init
2. You can key into parameters for e.g. name, description, author, etc.
3. The important one is "script". For me, I edit it directly. Paste

	"scripts": {
	"json:server": "json-server --watch db.json",
	"start": "node server.js",
	"dev": "nodemon server.js"
	},

### 2.2 server.js
This is the heart of the Heroku app. Just copy-paste lol

1. require('json-server') : This essentially makes this web-app a json-server.
2. jsonServer.router('db.json') : Change this to the json to be hosted.

# 3. Host to Heroku

Basically just push it like any other heroku app.

###### Code dump to push to Heroku
	heroku login

	heroku create <app name>

	git init

	git add -A

	git commit -m "Initial init"

	git remote add heroku <heroku git link>

	git push heroku master