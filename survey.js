const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`)
  rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.close();
  })
});