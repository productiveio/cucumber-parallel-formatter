# Cucumber.js Pretty Parallel Formatter (fork)

The Cucumber.js pretty formatter logs your feature suite in its original Gherkin form. It adds id tags to each scenario and step, which can be used to identify the scenario and step when running in parallel.

For details on how to use this formatter, see the original repository: [Official Cucumber.js Pretty Formatter](https://github.com/cucumber/cucumber-js-pretty-formatter).

## Install

The pretty formatter requires:

- Node.js 10, 12, 14 or 15.
- [Cucumber.js](https://www.npmjs.com/package/@cucumber/cucumber) 7.0 and above.

```shell
npm install --save-dev @cucumber/pretty-formatter @cucumber/cucumber
```

## Usage

```shell
cucumber-js -f @cucumber/pretty-formatter
```

## Credits

This is a fork of the [Official Cucumber.js Pretty Formatter](https://github.com/cucumber/cucumber-js-pretty-formatter) with support for parallel execution.
