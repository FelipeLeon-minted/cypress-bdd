# cypress-frontend
## Requirements
  - NodeJS v14
  - Chrome, Chromium, Electron or Firefox
  - Allure 
  - Recommended IDE like Visual Studio Code
  - cypress-cucumber-preprocessor plugin
  - @shelex/cypress-allure-plugin

## How to execute
  1. Using the terminal go to cypress-frontend folder
  2. Execute the following commands
  ```bash
  npm install
  npx cypress run --env allure=true 
  allure serve allure-results
  ```
  
