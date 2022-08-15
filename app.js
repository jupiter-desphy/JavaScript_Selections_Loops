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