function superbowlWin(record) {
    let winningYear;
    // Find the first record where the result is 'W'
    const winningRecord = record.find(entry => entry.result === 'W');
    
    // If such a record exists, return its year; otherwise, return undefined
    if (winningRecord) {
      winningYear = winningRecord.year;
    }
  
    return winningYear;
  }
  