# Getting Started

In order to automate some functionalities from swagdemo page, I decided to use Cypress with Page Object Model, cucumber to write the test cases in gherking language and typescript as programming language. 


Framework: 
 - Cypress
 - Cucumber
 - Typescript



## Install the project
1. clone the project 
2. Open the project and run the command: 
    ### `npm install`

3. Add a folder "config" within cypress folder
4. Add a "test.json" file within the "config" folder
5. Add the next configuration 

    {
    "baseUrl": "https://www.saucedemo.com/",
    "chromeWebSecurity": false,
    "integrationFolder": "cypress/features",
    "supportFile": "cypress/support/index.js",
    "video": false,
    "env":{
        "stardardUser": "standard_user",
        "password": "[add the password here]"
    }
  }


## Running the tests
   Open VS terminal and run the next command in order to install all dependencies:
      ### `npm run cy:test`   

