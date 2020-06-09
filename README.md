# pluralsight-js-dev

# Create a Repository
First of all create a new repository in github. hit plus sign top right
follow instructions and create your repository

# Connect your local dev environment into github
# clone repository into your local development environment.
click on "Clone or download"
copy the link
open on the command prompt (windows)
navigate to the direcotry of your project (use cd)
paste in the copied link from github into command prompt.
You have now connected your github repository to your local dev env.

# package.json starter kit
Create a new file called package.json
paste your boiler dependencies in the file from this link 'bit.ly/jsdevpackagejson'

# share your local development app on the web with localtunnel
Setup
npm install localtunnel -g
Start your app
lt --port 3000

# Automation "now" 
This is used to host ur work on the web in the cloud
Use script in package.json to automate for ex how to start node
we can also make a file called startMessage.js to show a msg when dev starts up, remember to add it in the npm script in package.json
share ur local app on web automatically in the package.json at start script

  "scripts": {
    "prestart": "node buildScripts/startMessage.js",
    "start": "node buildScripts/srcServer.js",
    "localtunnel": "lt --port 3000",
    "share": "npm-run-all --parallel open:src localtunnel"
  },

To run the script and localtunnel at the same time we type: npm run share

# Transpiling (babel)
make a .babelrc file in root folder
start script in package.json file should now read "prestart": "babel-node buildScripts/startMessage.js"
                                                  "start": "npm-run-all --parallel open:src "
                                                  "open:src": "babel-node buildScripts/srcServer.js",

we execute babel transpiling in our files by adding adding babel into the scripts in package.json

  "scripts": {
    "prestart": "babel-node buildScripts/startMessage.js",
    "start": "babel-node buildScripts/srcServer.js",
    "localtunnel": "lt --port 3000",
    "share": "npm-run-all --parallel open:src localtunnel"
  },

# Bundling "Webpack"
create webpack.config.dev.js file to define our rules

# Linting
Run lint: npm run lint
Run int watch: npm run lint -- --watch

create a file in the root folder called .eslintrc.json

add the contents as shown in the root file

add this code to the sript part of the package.json file: "lint": "esw webpack.config.* src buildScripts --color",

To disable the eslint rules in single files: add the the comment as shown in the srcServer.js file /* eslint-disable no-console */

eslint does not watch files by default so we will now add a script in package.json file to do just that
"lint:watch": "npm run lint -- --watch"

Also add lint to the start script not just in the lint session
"start": "npm-run-all --parallel open:src lint:watch"

Run without script
npm start -s

# Testing
run: npm test or npm t
Type: unit test
Framework: MOCHA
Assertion Library: chai.js
Helper Library: JSDOM
Where to run tests: Node
Test files location: alongside
When should test run: everytime you hit save

Create a test set up file in buildScripts

edit package.json file to automate test when we hit save
"test": "mocha --reporter progress buildScripts/testSetup.js \"src/**/*.test.js\""

Create test files for src files

test by running npm test or npm t

automate running testing by adding this line to the package.json file
"test:watch": "npm run test -- --watch"

also add it to the start script in the package.json file
"start": "npm-run-all --parallel open:src lint:watch test:watch",

run application with test 
npm start -s

CONTINOUS INTEGRATION
CI Server: Travis(linux) and Appveyor(windows)




