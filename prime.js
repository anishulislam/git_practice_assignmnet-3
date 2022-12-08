let number=13;
for(let i=1;i<=number;i++){
if(number%i==0){
count++;
}
}
if(count==2){
console.log(" it is a Prime number");
}else{
console.log("not a prime number");
}