const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nf4xxs',
  e2e: {
    baseUrl: "https://osc-ultimate-demo.mageplaza.com/",
    setupNodeEvents(on, config) {
    },
  },
});
