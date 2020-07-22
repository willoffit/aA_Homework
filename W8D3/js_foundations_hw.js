function madLib(verb, adjective, noun) {
  return "We shall " + verb.toUpperCase() + " the " + adjective.toUpperCase() + " " + noun.toUpperCase();
}

function isSubstring(searchString, subString) {
  return searchString.includes(subString)
}

function fizzBuzz(array) {
  var newArr = [];

  var i = 0;
  while (i < array.length) {
    let el = array[i];

    if (el % 3 === 0 || el % 5 === 0 && !(el % 3 === 0 && el % 5 === 0)) {
      newArr.push(el);
    }

    i += 1;
  }

  return newArr;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  var i = 2;
  while (i < num) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function sumOfNPrimes(n) {
  var sum = 0;

  var i = 2;
  var primeCount = 0;
  while (primeCount < n) {
    if (isPrime(i)) {
      sum += i;
      primeCount += 1;
    }

    i += 1
  }

  return sum;
}