console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let num=1; num <= 100; num++) {
    if(num % 2 ==1) {
    continue
    console.log (num);
    } 
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


let x = 1;
while (x <= 100) {
    if (x % 2 ==1) {
        console.log (x);
    }
        x++;
    }

let dwi = 1;
do {
    if (dwi % 2 == 1) {
        console.log (dwi);
    }
    dwi++;
} while (dwi <=100);


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

let dwfb=1;
do {
    if (dwfb % 3 ==0 && dwfb % 5 ==0) {
        console.log ('FIZZBUZZ', dwfb)
    }
    else if (dwfb % 3 ==0) {
        console.log ('FIZZ', dwfb);
    }
    else if (dwfb % 5 == 0) {
        console.log ('BUZZ', dwfb);
    }
    dwfb++;
} while (dwfb <=100);

// Exercise 4 Section

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let x4 = 0; x4 <=n; x4++) {
    if (x4 == value) {
        console.log ('Found value!')
        break;
    } else if (x4 == n) {
        console.log ('Did not find value')
    }
}

// Exercise 5 Section

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n5 = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i=start; i <= n5; i++) {
    if (i % fizzDivisor == 0 && i % buzzDivisor ==0) {
        console.log ('FIZZBUZZ', i)
    }
    else if (i % fizzDivisor == 0) {
        console.log ('FIZZ', i)
    }
    else if (i % buzzDivisor == 0) {
        console.log ('BUZZ', i)
    }
}
console.log (fizzDivisor, buzzDivisor)
