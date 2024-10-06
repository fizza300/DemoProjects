import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (numInput1) => {
  const num1 = +numInput1;
  
  rl.question('Enter the second number: ', (numInput2) => {
    const num2 = +numInput2;
    
    //add two numbers
    const sum = num1 + num2;

    // display the sum
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
    
    rl.close();
  });
});
