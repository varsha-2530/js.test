//q8. code for any base addition ?

function anybbaseaddition(base,num1,num2,) {
    let ans=0;
    let carry=0;
    let pow=1;

    while (num1>0 || num2>0 || carry>0) {
        let digit1=num1%10;
        num1=Math.floor(num1/10);
        let digit2=num2%10;
        num2=Math.floor(num2/10);
            let digit=digit1+digit2+carry;
            newdigit=digit%base
            carry=Math.floor(digit/base);
            ans+=newdigit*pow;
            pow*=10;
        
    }
    return ans;
}
let add=anybbaseaddition(2,1000,100);
console.log(add);