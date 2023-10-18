// Example of an object containing multiple pieces of data
const Purchase = {
    name : "Ramen",
    cost : 15,
    paymentMethod : "Debit",
    location : "UTC",
    store : "Ramen Nagi"
}

// Example function for discounting an array of prices
function discountRates(prices, discRate) {
    let discPrices = new Array();
    let price;
    let disc;

    for (price of prices) {
        disc = price * discRate;
        discPrices.push(disc);
    }

    return discPrices;
}

// Arrow functions can shorthand functions
// Function below includes ternary
evolveMe = (candy) => {return (candy > 20) ? "evolve" : "more candy";}

// Practice arrow function
let favClass = (userName, course) => {
    console.log("I'm " + userName + ", and my favorite class is " + course);
}

// Callbacks let the code use a function in a function

// Asynchronous programming allows code to run without having to wait for every previous line to finish
// Useful for aspects where you do not want to wait for everything to finish processing, just the important first

// Promise and reject are useful for asynchronous functions. Waits for a certain value to be true,
// then continues code. 

// "async" defines a function as asynchronous, and guarantees a Promise return. "await" will pause
// the code to wait for a promise

// "then" and "catch" can help with finding errors in code