export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "sramin" );
  }

  if (query.toLowerCase().includes("what is your name?")) {
    return "sramin";
  }

  const additionMatch = query.match(/what is (\d+) plus (\d+)\?/i);
  if (additionMatch) {
    const num1 = parseInt(additionMatch[1], 10);
    const num2 = parseInt(additionMatch[2], 10);
    return (num1 + num2).toString();
  }

   const largestMatch = query.match(/which of the following numbers is the largest: ([\d,\s]+)\?/i);
  if (largestMatch) {
    const numbers = largestMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    const largestNumber = Math.max(...numbers);
    return largestNumber.toString();
  }

  const squareCubeMatch = query.match(/which of the following numbers is both a square and a cube: ([\d,\s]+)\?/i);
  if (squareCubeMatch) {
    const numbers = squareCubeMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    const squareCubeNumbers = numbers.filter(num => {
      const sqrt = Math.sqrt(num);
      const cbrt = Math.cbrt(num);
      return Number.isInteger(sqrt) && Number.isInteger(cbrt);
    });
    return squareCubeNumbers.join(', ');
  }

  const primeMatch = query.match(/which of the following numbers are primes: ([\d,\s]+)\?/i);
  if (primeMatch) {
    const numbers = primeMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    const primeNumbers = numbers.filter(num => {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    });
    return primeNumbers.join(', ');
  }

  const multiplicationMatch = query.match(/what is (\d+) multiplied by (\d+)\?/i);
  if (multiplicationMatch) {
    const num1 = parseInt(multiplicationMatch[1], 10);
    const num2 = parseInt(multiplicationMatch[2], 10);
    return (num1 * num2).toString();
  }
  
  const additionGeneralMatch = query.match(/what is ((?:\d+\s*plus\s*)+\d+)\?/i);
  if (additionGeneralMatch) {
    const numbers = additionGeneralMatch[1]
      .split("plus")
      .map(num => parseInt(num.trim(), 10));

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum.toString();
  }

  const subtractionMatch = query.match(/what is (\d+) minus (\d+)\?/i);
  if (subtractionMatch) {
    const num1 = parseInt(subtractionMatch[1], 10);
    const num2 = parseInt(subtractionMatch[2], 10);
    return (num1 - num2).toString();
  }

  const powerMatch = query.match(/what is (\d+) to the power of (\d+)\?/i);
  if (powerMatch) {
    const base = parseInt(powerMatch[1], 10);
    const exponent = parseInt(powerMatch[2], 10);
    return Math.pow(base, exponent).toString();
  }


 
  
  return "";


}
