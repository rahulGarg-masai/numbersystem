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

