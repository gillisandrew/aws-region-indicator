const sass = require('node-sass');
const fs = require('fs');
const clipboard = require('clipboardy');
const readline = require('readline');


switch(process.argv[2]) {
  case "script":
    copyScript();
    break;
  case "style":
    copyStyle();
    break;
  case undefined:
    copyScript();
    askQuestion("Press enter to copy the CSS to your clipboard.").then(res => {
      copyStyle();
    })
    break;
  default:
    console.error("Unknown Argument: " + process.argv[2])
    process.exit(1);
    break;
}


function copyStyle() {
  const style = sass.renderSync({
    file: './src/style.scss',
  })
  clipboard.writeSync(style.css.toString())
  console.log("CSS copied to clipboard.")
}

function copyScript() {
  const script = fs.readFileSync('./src/script.js', {encoding: 'utf-8'})
  clipboard.writeSync(script)
  console.log("JS copied to clipboard.")
}

function askQuestion(query) {
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
  });

  return new Promise(resolve => rl.question(query, ans => {
      rl.close();
      resolve(ans);
  }))
}