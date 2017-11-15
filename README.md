# Angular Test Blog

Angular Application to display blogs and allow users read blogs and selected/deselect favorites

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
See deployment for notes on how to deploy the project on a live system.

## Demo 

A demo of the application can be seen [here](https://akash-m.github.io)

### Prerequisites

* Follow instructions to install NodeJS from the following link - https://nodejs.org/en/download/
* Follow instructions to install npm from the following link - https://www.npmjs.com/package/npm
* Follow instructions to install Angular CLI from the following link - https://www.npmjs.com/package/angular-cli

### Installing

The following steps will enable you to setup your development environment :

* Clone the repository from here : ```git clone https://github.com/Akash-M/angular-test-blog```
* Install the node_modules in the root folder : ```npm install```
* Run the application on port 4200 : ```npm start```

You can now view the application on localhost:4200 on your web browser.

## Directory Structure and Important Files

```
dist/                   // distribution folder for the app
-- index.html           // entry point of the application
e2e/                    // end to end tests
node_modules/           // npm modules
src/                    // source folder
-- app/                 // application components and related files
---- blog/              // blog component
---- components/        // generic components such as navbar to demonstrate component based architecture
---- app.*.ts/          // main app component files which bootstraps all modules to get the final app running
-- assets/              // css, scss, media and font files
-- index.html           // entry point of application
-- tsconfig.app.json    // typescript config file for the app
-- tsconfig.spec.json   // typescript config file for tests
angular-cli.json        // angular config file 
karma.conf.js           // karma config file as test runner
package.json            // app information, dependency management, scripts, build information
protractor.conf.js      // protractor config file for end to end tests
tsconfig.json           // typescript config file
tslint.json             // config file for ts lint static code analysis
```

## Running the tests

* Run end to end test : ```npm run test```

## Deployment

Generate distribution files for deployment on server

* Make build for dev server : ```npm run build:dev```
* Make build for prod server : ```npm run build:prod``` // based on aot

Place the files generated in the dist/ folder on the server to serve the application 

## Authors

**Akash Manjunath**- [Akash-M](https://github.com/Akash-M)