const arvish = require('arvish');
const input = arvish.input;
const font = arvish.config.get('font') || 'Standard';
const list = [{
  title: input,
  subtitle: font,
  arg: input,
}];
const items = arvish.inputMatches(list, 'title');
arvish.output(items);

