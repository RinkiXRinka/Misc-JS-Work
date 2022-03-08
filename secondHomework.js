/*
## Written Questions 

Write answers to the following questions as comments. As a reminder you can highlight your code and type `command` + `/` to turn your code into a comment.

```
// my commented answer
```

1. What is the difference between a **parameter** and an **argument**?
A parameter is the variable listed inside the parentheses in the function definition. An argument is the value that is sent to the function when it is called.

2. Within a function, what is the difference between **return** and **console.log**?
console.log() is the equivalent of print in other languages. return is used for returning values from a function.

&#x1F534; **Commit your work!** <br>
Your commit message should read something like: <br>
"verbal questions completed"
*/

/*
###################### Palindrome 

Write a function `checkPalindrome` that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with **capital letters**.

```javascript
console.log(checkPalindrome("Radar"));
```

> => true

```javascript
console.log(checkPalindrome("Borscht"));
```

> => false

function checkPalindrome(name){
  
    let lowerName = name.toLowerCase();
    let repAll = lowerName.replaceAll(' ','');
    let splitName = repAll.split('');
    let reverseName = splitName.reverse();
    let joinName = reverseName.join('')
    
  if(repAll === joinName){
    return true;
  }
  return false;
}

let isBool = checkPalindrome('anita lava la tina')
console.log(isBool);


&#x1F534; **Commit your work!** <br>
Your commit message should read something like: <br>
"palindrome completed"
*/

/*
#################### Sum Array 

Write a function `sumArray` that takes an **array** as an argument.
The array should contain numbers. The function should return the sum of the numbers in the array.
Use a _for loop_ within the function to iterate over the array and sum the contents.
Use a variable such as 

```javascript
let sum = 0;
```

that will **accumulate** value within the loop.
Expected result:

```javascript
console.log(sumArray([1, 2, 3, 4, 5, 6]));
=> 21
```

function sumArray(arr) {
  let lengthOfArray = arr.length;
  let sum = 0;
  for(let i = 0; i < lengthOfArray; i++){
    sum += arr[i];
  }
  return sum
}
console.log(sumArray([1,2,3,4,5,6]));
*/

/*
##################### Prime Numbers 

A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, [go here](https://en.wikipedia.org/wiki/Prime_number).
To test whether a number is Prime, you only need to test as far as the **square root** of that number. This is advisable for optimization and testing large numbers.

### Step One

Write a function called `checkPrime` that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.

_Hint:_ Check every number up to the square root. To do this, try a _for loop_.

### Step Two
Write another function called `printPrimes` that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with `printPrimes(97)`, it will print all the Prime numbers up to and including 97.

This function can **call on** the previous `checkPrime` function.
</details>

&#x1F534; **Commit your work!** <br>
Your commit message should read something like: <br>
"prime numbers completed"

let prime = 0;

function checkPrime(prime){
let result = 0;
for (let i = 2; i < prime; i++) {
    result = prime % i;
    console.log(result);
    if (result == 0){
    console.log('no es primo');
    }
  else{
    console.log('es primo');
    }
  }
}

checkPrime(7);

*/
