console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let num=1; num <= 100; num++) {
    if(num % 2 ==1) {
    console.log (num);
    }
    else if (num % 2 == 0){
        continue
    }
    
}

let x = 1;
while (x <= 100) {
    if (x % 2 ==1) {
        console.log (x);
    }
        x++;
    }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let fb=1; fb <= 100; fb++) {
    if (fb % 3 ==0 && fb % 5 ==0) {
        console.log ('FIZZBUZZ', fb)
    }
    else if (fb % 3 ==0) {
        console.log ('FIZZ', fb)
    }
    else if (fb % 5 == 0) {
        console.log ('BUZZ', fb)
    }

}

// Exercise 3 Section
let bf = 1;
while (bf <= 100) {
    if (bf % 3 ==0 && bf % 5 ==0) {
        console.log ('FIZZBUZZ', bf)
    }
    else if (bf % 3 ==0) {
        console.log ('FIZZ', bf)
    }
    else if (bf % 5 == 0) {
        console.log ('BUZZ', bf)
    }
    bf++;
}

// Exercise 4 Section

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let x4 = 1; x4 <=n; x4++) {
    if (x4 === value) {
        console.log ('Found value!')
        break;
    } else {
        console.log ('Did not find value')
    }
}

// Exercise 5 Section

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n5 = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i=start; i <= n5; i++) {
    if (fizzDivisor && buzzDivisor) {
        console.log ('FIZZBUZZ', i)
    }
    else if (fizzDivisor) {
        console.log ('FIZZ', i)
    }
    else if (buzzDivisor) {
        console.log ('BUZZ', i)
    }

}