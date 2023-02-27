const numberInput = 21;
// Checks if the number belongs in the Fibonacci sequence
function checkFibonacci(number) {
  let fibonacciSequence = [0, 1]; 
  let index = 1;

  while (fibonacciSequence[index] < number) { 
    fibonacciSequence.push(fibonacciSequence[index] + fibonacciSequence[index-1]); 
    index++;
  }

  if (fibonacciSequence[index] === number) { 
    return `The number ${number} belongs to the Fibonacci sequence!`;
  } else { 
    return `The number ${number} does not belong to the Fibonacci sequence.`;
  }
}

console.log(checkFibonacci(numberInput)); 