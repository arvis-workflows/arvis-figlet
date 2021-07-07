const arvish = require('arvish');
const figlet = require('figlet');
const font = arvish.config.get('font') || 'Standard';
const list = figlet
  .fontsSync()
  .map(fontName => ({
    title: fontName,
    subtitle: font,
    arg: fontName,
  }));
const items = arvish.inputMatches(list, 'title');
arvish.output(items);

