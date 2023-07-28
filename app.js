console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    if(count < 0){
        console.log("Negative number received, inverting...");
        count = -count;
    }
    
    for(let i = 0; i <= count; i++){
        if(i % 2 != 0){
            console.log("odd");
        }
        else{
            console.log("even");
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    
    let aboveSixteen = `Congrats ${userName}, you can drive!`
    let belowSixteen = `Sorry ${userName}, you can't drive, wait until you're 16.`

    if(age >= 16){
        console.log(aboveSixteen);
    }
    else{
        console.log(belowSixteen);
    }
}

//Exercise 3

function detectQuad(x, y){
    if(x == 0 && y == 0){
        console.log("(0, 0) lies on the origin")
    }
    else if(x == 0 && y != 0){
        console.log(`(${x}, ${y}) is on the x axis`)
    }
    else if(x != 0 && y == 0){
        console.log(`(${x}, ${y}) is on the y axis`)
    }
    else if(x > 0 && y > 0){
        console.log(`(${x}, ${y}) is in the Quadrant 1`)
    }
    else if(x > 0 && y < 0){
        console.log(`(${x}, ${y}) is in the Quadrant 2`)
    }
    else if(x < 0 && y < 0){
        console.log(`(${x}, ${y}) is in the Quadrant 3`)
    }
    else if(x < 0 && y > 0){
        console.log(`(${x}, ${y}) is in the Quadrant 4`)
    }
}

//Exercise 4

function triangleType(a, b, c){
    
    if(!(a + b <= c || a + c <= b || b + c <= a)){
        if(a == b == c){
            console.log(`equilateral`);
        }
        else if(a == b || a == c || b == c){
            console.log(`${a}, ${b}, ${c} makes an isosceles triangle`);
        }
        else{
            console.log(`${a}, ${b}, ${c} makes a scalene triangle`);
        }
    }
    else{
        console.log(`${a}, ${b}, ${c} makes an invalid triangle`);
    }
}

//Exercise 5

function dataPlan(planLimit, day, usage){

    dAvg = dataAverage(planLimit);
    currentDaily = usage/day;

    console.log(`${day} used, ${30 - day} days remaining\n`);
    console.log(`Average daily use: ${dAvg} GB/day`);
    if(usage > planLimit){
        console.log(`You've run out of data.`)
    }
    else if(currentDaily > dAvg){
        console.log(`You are EXCEEDING your average daily use (you are using ${currentDaily} GB/day)` +
        `\ncontinuing this high usage will exceed your plan by ${currentDaily * 30} GB.` +
        `\nTo stay below your data plan, use no more than ${(planLimit - usage)/(30 - day)}`);
    }
    else if(currentDaily < dAvg){
        console.log(`You are using less than your average daily use (you are using ${currentDaily} GB/day)` +
        `continuing this will result in you having an excess of ${planLimit - currentDaily * 30} GB.`);
    }
    else{
        console.log(`You are exactly meeting your daily use limits (${currentDaily} GB/day)`);
    }
}

function dataAverage(planLimit){
    return planLimit/30;
}