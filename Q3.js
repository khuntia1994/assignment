function isPrime(x) {
  if (x <= 1) return false;
  if (x <= 3) return true;
  if (x % 2 === 0 || x % 3 === 0) return false;

  for (let i = 5; i * i <= x; i = i + 6) {
    if (x % i === 0 || x % (i + 2) === 0) return false;
  }

  return true;
}
function nextPrimeDifference(x) {
  let nextPrime = x;

  while (!isPrime(nextPrime)) {
    nextPrime++;
  }

  return nextPrime - x;
}
 const x = 15;

console.log(isPrime(x)); // prints "true"
console.log(nextPrimeDifference(x)); // prints "2"
