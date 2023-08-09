class RulesTableGenerator {
  generateRulesTable(choices) {
    const table = [['', ...choices]];
    for (let i = 0; i < choices.length; i++) {
      const row = [choices[i]];
      const medium = Math.floor(choices.length/2)
      for (let j = 0; j < choices.length; j++) {
        if (i === j) {
          row.push('Draw');
        } else if (i - j > medium && i - j) {
          row.push('Win');
        }
        else if (i - j >= -medium && i - j < 0) {
          row.push('Win');
        }
        else {
          row.push('Lose');
        }
      }
      table.push(row);
    }

    return table;
  }
}

module.exports = RulesTableGenerator;

  