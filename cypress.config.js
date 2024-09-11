const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  video: true,
  env: {
    url: "https://www.demoblaze.com/",
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on("file:preprocessor", cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
   },
    specPattern: "cypress/integration/examples/BDD/Features/*.feature"
   // specPattern: "cypress/integration/examples/BDD/s.feature"
    //specPattern: "cypress/integration/examples/*.js"
  },
});
