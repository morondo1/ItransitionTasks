const KeyGenerator = require('./KeyGenerator');
const HMACGenerator = require('./HMACGenerator');
const WinnerDeterminer = require('./WinnerDeterminer');
const RulesTableGenerator = require('./RulesTableGenerator');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayRulesTable(table) {
  for (const row of table) {
    console.log(row.join('\t'));
  }
}

const choices = process.argv.slice(2);

if (choices.length < 3 || choices.length % 2 === 0) {
  console.log("Please, pass an odd number >= 3 non-repeating rows");
  rl.close();
} else {
  const keyGenerator = new KeyGenerator();
  const hmacGenerator = new HMACGenerator();
  const winnerDeterminer = new WinnerDeterminer();
  const rulesTableGenerator = new RulesTableGenerator();

  const key = keyGenerator.generateRandomKey();
  const computerChoiceIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[computerChoiceIndex];
  const hmac = hmacGenerator.generateHMAC(computerChoice, key);

  console.log(`HMAC: ${hmac}`);
  console.log("\nAvalable moves:");
  choices.forEach((choice, index) => {
    console.log(`${index + 1} - ${choice}`);
  });
  console.log("0 - exit");
  console.log("? - help");

  rl.question("Enter your move: ", (userChoice) => {
    if (userChoice === '?') {
      const rulesTable = rulesTableGenerator.generateRulesTable(choices);
      console.log("\nRules Table:");
      displayRulesTable(rulesTable);
      rl.close();
      return;
    }

    const parsedUserChoice = parseInt(userChoice);

    if (parsedUserChoice >= 1 && parsedUserChoice <= choices.length) {
      const userChoiceIndex = parsedUserChoice - 1;
      const result = winnerDeterminer.determineWinner(userChoiceIndex, computerChoiceIndex, choices.length);
      console.log(`Your move: ${choices[userChoiceIndex]}`);
      console.log(`Computer's move: ${computerChoice}`);
      console.log(`${result}`);
      console.log("Generated key:", key.toString('hex'));
      rl.close();
    } else if (parsedUserChoice === 0) {
      console.log("Exiting the game.");
      rl.close();
    } else {
      console.log("Invalid choice. Please choose a valid option.");
      rl.close();
    }
  });
}




  
  
