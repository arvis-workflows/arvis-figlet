const arvish = require('arvish');
const figlet = require('figlet');
const input = arvish.input;
const font = arvish.config.get('font') || 'Standard';
const output = figlet.textSync(input, {
  font
});
console.log(output);

