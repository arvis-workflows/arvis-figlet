const figlet = require('figlet');
const cp = require('child_process');
const got = require('got');
const arvish = require('arvish');

const baseUrl = 'https://api.github.com/gists';

function sendGist(data, ext) {
  if (data === '') return;

  const payload = {
    'description': 'arvis-figlet',
    'public': false,
    'files': {},
  };

  const filename = `output.${ext}`;
  payload.files[filename] = {
    'content': data,
  };

  const options = {
    method: 'post',
    headers: {
      'accept': 'application/vnd.github.v3+json',
      'user-agent': 'arvis-figlet',
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  got(baseUrl, options).then(response => {
    const url = JSON.parse(response.body).html_url.trim();
    cp.spawnSync('open', [url], {
      encoding: 'utf8',
    });
  });
}

const result = figlet.fontsSync()
  .map(font => {
    const content = figlet.textSync(arvish.input, {
      font
    })
    return `
# ${font}

\`\`\`
${content}
\`\`\`
`;
  })
  .join('\n');
sendGist(result, 'md');

