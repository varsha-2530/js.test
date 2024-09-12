//Write a js Program for finding Prime Numbers between 1-100.//

function isPrime(num){
    for(let i=2;i<=num;i++){
        let findPrime = true;

    for (let j = 2; j < i; j++){
        if(i % j === 0){
            findPrime = false
           break;
        }
    }
        if(findPrime){
            console.log(i);
        }    
    }
}
isPrime(100)



