//  Original question: http://stackoverflow.com/questions/27865682/effective-solution-for-create-array-containing-all-groups-in-regex-matches/27866227#27866227

// User wanted a way to search a string or strings and return a matched set of results as an array

function findInString(string, pattern) {
  return string.split('').filter(function (element) {
     return element.match(pattern)
  })
}
