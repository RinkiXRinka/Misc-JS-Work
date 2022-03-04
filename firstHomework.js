/* Section 1-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
The difference between interpolation and concatentation is...

Concatenation allows you to combine two strings together, but only works with strings.
Otherwise, Interpolation let you add values such as variables mathematical calculations into a string.

DRY stands for: Don't repeat yourself

I haven't used a programming tool to write dry code.

Differences between Var, Let and Const variables.

Var keywords are global scoped and function scoped, global scoped variables can be accesed globally, and function scoped variables can be accesed within the function.
Let keywords are block code, it can't be accessible outside the particular code.
Let keywords cannot be re-declare in the same block.
Const keywords has the same properties as the let keyword, except the user cannot update it.

*/

//Section 2 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

 console.log(Boolean(a < b));
 console.log(Boolean(c > d));
 console.log(Boolean('Name' === 'Name'));
 console.log(Boolean(a < b < c));
 console.log(Boolean(a <= a < d));
 console.log(Boolean(e != 'Kevin'));
 console.log(Boolean(48 == '48'));
 console.log(Boolean(f != e));

 /*
true
true
true
true
true
true
true
true
 */

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let g = 0;
console.log(g);
g = b + c;
console.log(g);

/*
  - Did you use `const`, `let` or `var`? Why did you choose the one you chose?
  I chose let because i can change the value of the variable with this keyword

  - What happens if you don't use `const `, `let` or `var`? Do you get an error? If so what does it say?
  No, I didn't get an error.
  - what happens if you write `10 = g`?
  I get a SyntaxError: Invalid left-hand side in assignment
*/

/*
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Section 3

Is the code below an infinite loop? Why or why not?
Yes, it is an infinite loop because the condition will always be true and the line of code below will always run.

*/
`js
while (true) {
	console.log('Do not run this loop');
}
`
/*
INFINITE LOOP II
is this loop an infinite loop? Why or why not?

 <!---  [comment]: <> (`const` will throw an error - let the students spot this)-->

```js
const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}
```

It is an infinite loop, but the program will throw an error because of the runProgram variable, that variable was declared with a const keyword
and cannot be updated.
*/

/*WHILE LOOP
_Without running this loop_, what is the expected output?

Read the code line by line-- everything happens in sequence. Write down what you think the code will log in the Terminal by adding comments before each line of code, explaining what that line of code will do. Be patient with your thought! There is no rush.


```js
let letters = "A";
let i = 0;

//Will start a while loop that will run as long as i is lesser than 20
while (i < 20) {
	// Will Concatenate an aditional 'A' to the variable letters
	letters += "A";
	//Increments the value of i by 1
	i++;
}
//outputs the variable letters in the console.
console.log(letters);

EXPECTATION: AAAAAAAAAAAAAAAAAAA -> 19 A

*/
 

let letters = "A";
let i = 0;

//Will start a while loop that will run as long as i is lesser than 20
while (i < 20) {
	// Will Concatenate an aditional 'A' to the variable letters
	letters += "A";
	//Increments the value of i by 1
	i++;
}
//outputs the variable letters in the console.
console.log(letters);

//RESULT: AAAAAAAAAAAAAAAAAAAAA -> 21 A
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// SECTION 4
// FOR LOOPS

// A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?

// Differences
//The difference between for loop and while loop is that in for loop the number of iterations to be done is already known and is used to obtain a certain result, 
//but in while loop the command runs until a certain condition is reached and the statement is proved to be false.

//Similarities
//Iterates over a certain condition and if the condition is true it will still be running.

/*
What are the three components of the **control panel**? Each component is separated by a semicolon `;`.

Remember: Write your answers as comments in the file.

* The first part of the control panel is: The initialization (loop variant)
* The second part of the control panel is: The condition
* The third part of the control panel is: The advancement to the next iteration
*/ 

//#### For loop II

//Write a for loop that will console.log the numbers 0 to 999.
/*
for( i = 0; i < 1000; i++){
	console.log(i);
}
*/
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
#### For loop in reverse

**Code:**

Using a [postfix operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) `i--` instead of `i++`, write a *for* loop that iterates in *reverse*. Console.log a countdown from 999 to 0.


for(i = 999; i >= 0; i--){
	console.log(i);
}
*/

/*#### For loop in reverse

**Code:**

Using a [postfix operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) `i--` instead of `i++`, write a *for* loop that iterates in *reverse*. Console.log a countdown from 999 to 0.


#### More counting

Write a *for* loop that uses **string concatenation** to send a message to the console as well as the current value of `i`.

The loop should run from 1 to 10.

Expected Result:

```
The value of i is: 1 of 10
The value of i is: 2 of 10
The value of i is: 3 of 10
The value of i is: 4 of 10
The value of i is: 5 of 10
The value of i is: 6 of 10
The value of i is: 7 of 10
The value of i is: 8 of 10
The value of i is: 9 of 10
The value of i is: 10 of 10
```


for(i = 1; i <= 10; i++){
	let messge = "The value of i is: ";
	console.log(messge + '' + i + ' of 10');
}
*/

/*
**Bonus Challenge (optional):**

Rewrite the above loop using [String Interpolation/Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) instead of **concatenation**

Note: string interpolation uses `backticks`, this is a different character than a single quote. The `backtick` can usually be found above the left `tab` key/below the `esc` key and it shares it with the `tilda` `~`

for(i = 1; i <= 10; i++){
	let messge = "The value of i is: ";
	console.log(`${messge} ${i} of 10`);
}
*/

/*
## Iteration

```js
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
```

* Iterate over the `StarWars` array and print each element to the console.

* Iterate over the `StarWars` array again and print each character's name **as well as** the value of `i`.

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
lengthOfArray = StarWars.length;

for(i=0;i<lengthOfArray; i++){
	console.log(StarWars[i], i);
	
}


**Bonus Challenge (optional):**

* Figure out how to iterate over **every second** element of the `StarWars` array, starting with the first element.

> => Han, R2D2, Leia

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
lengthOfArray = StarWars.length;

for(i=0;i<lengthOfArray; i++){
	console.log(StarWars[i], i);
	i++;
}

*/
