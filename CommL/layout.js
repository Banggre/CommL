const importCss = (css=[]) => {
  const result = css.map(cs => `<link rel="stylesheet" href=/stylesheets/${cs}></link>`)
                    .reduce((acc,val) => acc += val,"");
  return result;
}

const importJs = (scriptList=[]) => {
  const result = scriptList.map(script => `<script type="module" src=/javascript/${script}></script>`)
                    .reduce((acc,val) => acc += val,"");
  return result;
}

const importBody = (body) => {
  const result = body.reduce((acc,val) => acc += val,"");
  return result;
}

const layout = (title, body, css, js) => 
`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  ${importCss(css)}
</head>
<body>
  ${importBody(body)}
  ${importJs(js)}
</body>
</html>`;


module.exports = layout;