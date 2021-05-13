function superbowlWin(target) {
    const winningRecord = target.find((record) => record.result === 'W')
    if (winningRecord) {
        return winningRecord.year
    } else {
        return undefined
    }
}

