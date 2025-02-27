const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    env: {
      USERNAME: 'standard_user',
      PASSWORD: 'secret_sauce',
      PRODUCTOS: [
        "Sauce Labs Bike Light",
        "Sauce Labs Backpack",
        "Sauce Labs Fleece Jacket"
      ]
    },
    baseUrl: 'https://www.saucedemo.com',
    specPattern: '**/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    blockHosts: ["https://events.backtrace.io"],
  },
});
