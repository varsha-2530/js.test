for (let i = 1; i<=3; i++) {
   for(let j=1;j<=3;j++){
    if(i===j)
        continue;
      console.log(i+j);
    }
      
}
/*

l1=outerloop=ram=i=1 i<=3 1<=3 true
l2=innerloop=ram=j=1 j<=3 1<3 true
l4=ram=if(i===j)1===1 is true continue(skip the current iteration and move next)
l2=ram=j=2
l3=ram=if(i===j)1===2is false is print line5
l5=ram=i+j 1+2=3
l2=ram=j=3
l3=ram=if(i===j)1===3 is false is print line5
l5=ram=i+j 1+3=4
l2=ram=j=3;j=<3 3<=3 false go outer loop
l1=outerloop=ram=i=2 i<=3 2<=3  true
l2=innerloop=ram=j=1 j<=3 1<3 true
l3=if(i===j) 2===1 is false is print line5
l5=i+j 2+1=3
l2=ram=j=2 j<=3 2<=3 true
l3=ram=if(i===j) 2===2 is true  continue statement
l2=j=3
l2=if(i===j) 2===3 is false is print line5
l5=ram=i+j 2+3=5
l2=ram=j=3;j=<3 3<=3 false go outer loop
l1=outerloop=i=3 i<=3 true
l2=innerloop=ram j=1 1<=3
l3=if(i===j) 3===1 is false is print line5
l5=ram=i+j 3+1=4
l2=j=2 2<=3 true
l3=ram=if(i===j) 3===2 is false is print line5
l5=ram=i+j 3+2=5
l2=ram=j=3 
l3=ram=if(i===j) 3===3 is true  continue statement
l2=ram=j=3;j=<3 3<=3 false go outer loop
l1=ram=i=4 i<=3 4<=3 is false so is print 
3
4
3
5
4
5
*/