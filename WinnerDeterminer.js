class WinnerDeterminer {
  determineWinner(playerChoiceIndex, computerChoiceIndex, choicesCount) {
    const halfCount = Math.floor(choicesCount / 2);

    if (playerChoiceIndex === computerChoiceIndex) {
      return "Draw!";
    } else if (
      (playerChoiceIndex + halfCount) % choicesCount === computerChoiceIndex ||
      (playerChoiceIndex + halfCount) % choicesCount + halfCount === computerChoiceIndex
    ) {
      return "You win!";
    } else  {
      return "Computer wins!";
    }
  }
}

module.exports = WinnerDeterminer;

  