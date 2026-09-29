import * as core from '@actions/core';
import { AgeFromDateString } from 'age-calculator';

try {
  const date = core.getInput('date', { required: true });
  if (Number.isNaN(new Date(date).getTime())) {
    throw new Error(`Invalid date: "${date}"`);
  }
  const age = new AgeFromDateString(date).age.toString();
  core.setOutput('age', age);
} catch (error) {
  core.setFailed(error.message);
}
