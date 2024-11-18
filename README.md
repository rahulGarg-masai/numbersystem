#numbersystem project

##Description

This project includes javascript code to:
 
 *Identify even and odd numbers from a given input array.("Index.js")
 *Find prime numbers from a given array.("app.js")
 *Calculate the maximum , minimum and sum of the prime numbers found.

## Answers
 *Index.js -
const numbers = [3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18];
for (let i=0;i<numbers.length ;i++){
    if(numbers[i]%2===0){
        console.log(numbers[i] + "is even");
    }
    else {
        console.log(numbers[i] + "is odd");
    }
}

*app.js -
const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];

  const primeArray =[];
  const oddArray=[];
  const evenArray=[];
  function isPrime(num){
    if(num <2) return false;
for (let i =2 ;i<=Math.sqrt(num) ;i++){
if(num%i===0){
    return false;
}

}  
return true;
  }

for (let i=0 ; i< numbers.length;i++){
    if(isPrime(numbers[i])){
        primeArray.push(numbers[i]);
    }
    if(numbers[i]%2===0){
        evenArray.push(numbers[i]);
    }
    else {
        oddArray.push(numbers[i]);
    }
}
console.log("Prime Numbers:" , primeArray);
console.log("Odd Numbers:" , oddArray);
console.log("Even Numbers:" , evenArray);


//part 2
let max = primeArray[0];
let min=primeArray[0];
let sum =0;
for (let i=0;i<primeArray.length ;i++){
    if(primeArray[i]>max){
        max = primeArray[i];
    }
    if(primeArray[i]<min){
        min = primeArray[i];
    }
    sum += primeArray[i];
}
    console.log("Maximum" , max);
    console.log("Minimum" , min);
    console.log("Sum" , sum);


##Expected Outputs

*Index.js - 

3is odd
7is odd
2is even
15is odd
9is odd
20is even
5is odd
14is even
12is even
1is odd
8is even
11is odd
6is even
19is odd
4is even
10is even
17is odd
13is odd
16is even
18is even


*app.js -

Prime Numbers: [
  19, 23, 13, 31, 29,
   2, 11, 17,  5
]
Odd Numbers: [
  19, 23, 13, 31, 29,
  35, 11, 17,  5,  9,
  27
]
Even Numbers: [
  4, 16, 28,  8, 14,
  6,  2, 12, 30
]
Maximum 31
Minimum 2
Sum 150
