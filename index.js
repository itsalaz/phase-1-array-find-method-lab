const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]

function superbowlWin(record) {
    const foundWin = record.find(recordObj => {
      return recordObj.result === "W"
    })
    if(foundWin !== undefined) {
    return foundWin.year
  } else {
    return undefined
}
}
