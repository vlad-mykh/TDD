class Calculator {
  constructor(){
  }

  add(input){
    let delimiter = ',';
    let optionalIndicator = '//';

    if(input.startsWith(optionalIndicator)){
      let end = input.indexOf('\n');
      let optionalPart = input.substr(0, end + 1);

      delimiter = input.substring(optionalIndicator.length, end);
      input = input.substring(optionalPart.length);
    }

    input = input.replace('\n', delimiter);
    let parseInput = input.split(delimiter);

    parseInput.splice(3);

    let negative = [];

    for(let i = 0; i < parseInput.length; i++) {
      parseInput[i] = +parseInput[i];

      if(parseInput[i] < 0) negative.push(negative[i]);
      if(parseInput[i] > 1000) parseInput.splice(i);
    }

    if(negative.length) return new Error("negatives not allowed" + negative);

    let result = parseInput.reduce(function(sum, current) {
      return sum + current;
    });

    return result;
  }



}

module.exports = Calculator;