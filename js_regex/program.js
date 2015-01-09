var foo = '123asfasff111f6';


function findInString(string, pattern) {
  return string.split('').filter(function (element) {
     return element.match(pattern)
  })
}


console.log(findInString(foo, /\d/g));
