//code for anybase to anybase number system conversion ?

//step1-any base to decimal

function anybasetodecimal(num,base) {
    let ans=0;
    let pow=1;
    while (num>0){
        let rem=num%10;
        num=Math.floor(num/10);
        rem=rem*pow;
        ans=ans+rem;
        pow=pow*base;
        
    }
    return ans;
}

//step3- decimal to any base

function decimaltoanybase(num,base) {
    let ans=0;
    let pow=1;
    while (num>0){
        let rem=num%base;
        num=Math.floor(num/base);
        rem=rem*pow;
        ans=ans+rem;
        pow=pow*10;
    }
    return ans;
}

//final step any base to any base//
function anybasetoanybase(num1,base1,base2) {
    let number=anybasetodecimal(num1,base1);
    let finalnumber=decimaltoanybase(number,base2)

    console.log(finalnumber);
    
}
anybasetoanybase(1011,2,8);