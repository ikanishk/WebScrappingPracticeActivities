//t1= read a file(disk operation)
//t2= Find Prime Numbers(CPU operation)
//t3= Write  a file(disk operation)
//t4= Print squares of prime numbers(CPU operation)
//this entire operation is to be done without using callbacks
//Without using callbacks, tasks are executed one after the other which ends up wasting time.
//node FirstLackofcallback.js --source f1.txt --dest f2.txt --n 5000 [Run this command to witness the output(prime number till n=5000)]

let parser=require("minimist");
let fs=require("fs");


let args=parser(process.argv);

let timei=Date.now();
console.log(timei);
let stext=fs.readFileSync(args.source,"utf-8");
//utf-8 means text, without it the txt will be printed in bits/bytes.
let timee=Date.now();
console.log(timee-timei);

function Isprime(x){
let isprime=true;
for(let i=2;i*i<x;i++){
        if(x%i==0){
           isprime=false;
           break;
        }     
}
return isprime;
}


let t3=Date.now();
let arr=[]
for(let i=2;i<args.n;i++){
let isprime=Isprime(i);
if(isprime==true){
arr.push(i);
}
}
let t4=Date.now();
console.log(t4-t3)//time taken for the task of calculating all the prime numbers.


