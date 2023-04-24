const numbers = [1,3,0,5,6,2]


function findNumber(){
    const foundNumber = numbers.find(num => num > 2);
    console.log(foundNumber);
}

function filterNumbers(){
    const evenNumbers = numbers.filter(number => number % 2 === 0);
    console.log(evenNumbers)
}

function numberPresent(){
    const isPresent = numbers.includes(3);

    if (isPresent) {
    console.log("Number Found");
    } else {
    console.log("Number not found");
    }
}

function forEachdemo(){
    numbers.forEach((number) => {
        console.log(number * 2);
      });
}

function sliceNumbers(){
    const slicedNumbers = numbers.slice(1, 4);
    console.log(slicedNumbers)
}

function spliceNumbers(){
    numbers.splice(2, 1);
    console.log(numbers)
}

function mapDemo(){
    const squaredNumbers = numbers.map((number) => {
        return number ** 2;
      });
    console.log(squaredNumbers)
}

function reduceDemo(){
    const sum = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
      
      console.log(sum)
}

findNumber()
filterNumbers()
numberPresent()
forEachdemo()
sliceNumbers()
spliceNumbers()
mapDemo()
reduceDemo()