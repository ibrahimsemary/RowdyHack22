
const number = parseInt(prompt('Enter a positive number: '));

if(number < 0) {
    console.log('Error! Factorial of negative number does not exist.')
}

else if (number === 0){
        console.log('The factorial of ${number} is 1.');
    }

    else {
        let fact = 1;
        for(i = 1; i <= number; i++){
            fact *= i;
        }
        console.log()
    }
    