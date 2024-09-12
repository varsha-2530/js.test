let found = false; 
for (let i = 1; i <= 3; i++) { 
for (let j = 1; j <= 3; j++) { 
if (i * j > 4) { 
found = true; break; 
} 
console.log(i,j); 
} 
if (found) break; 
}

/*
l1=ram let found=false
l2=outerloop=ram= i=1; i<=3 1<=3 true
l3=innnerloop=ram=j=1; j<=3 1<=3 true
l4=ram=if(i*j>4) 1*1=1 1<4 true
l7=ram(i,j) print(1,1);
l3=ram=j=2  2<=3 true
l4=if(i*j>4) 1*2=2 2 is not greater then 4 true;
l7ram=(i,j) print(1,2);
l3=ram=j=3  3<=3true
l4=if(i*j>4) 1*3=3 3 is not greater then 4 true;
l7ram=(i,j) print(1,3);
l2ram=j=4 4<=3 false go outer loop,
l2=ram=i++ i=2 2<=3 true
l3=ram=j=1  1<=3true
l4=if(i*j>4) 2*1=2 2 is not greater then 4 true;
l7ram=(i,j) print(2,1);
l3=ram=j=2 2<=3true
l4=if(i*j>4) 2*2=4 4 is not greater then 4 true 4=4;
l7ram=(i,j) print(2,2);
l3=ram=j=3  3<=3true
l4=if(i*j>4) 2*3=6 6 is greater then 4 FALSE;
l5ram found = true
l9=ram=(found) break statement (innerloop)
ram=so outerloop also break
print(1,1);
print(1,2);
print(1,3);
print(2,1);
print(2,2);

*/
