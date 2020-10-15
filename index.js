const core = require('@actions/core');
const { AgeFromDateString } = require('age-calculator');

try {
  const date = core.getInput('date');
  const age = new AgeFromDateString(date).age.toString();
  core.setOutput('age', age);
} catch (error) {
  core.setFailed(error.message);
}
