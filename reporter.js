const { AllureRuntime } = require('allure-js-commons');
const { CucumberJSAllureFormatter } = require('allure-cucumberjs');

class MyCucumberJSAllureFormatter extends CucumberJSAllureFormatter {
  constructor(options) {
    super(options, new AllureRuntime({ resultsDir: "./allure-results" }), {
    });
  }
}
module.exports = MyCucumberJSAllureFormatter;