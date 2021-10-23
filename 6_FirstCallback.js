//t1= read a file(disk operation)
//t2= Find Prime Numbers(CPU operation)
//t3= Write  a file(disk operation)
//t4= Print squares of prime numbers(CPU operation)
//this entire operation is to be done with callbacks
//Without using callbacks, tasks are executed one after the other which ends up wasting time.
//node FirstCallback.js --source f1.txt --dest f2.txt --n 5000 [Run this command to witness the output(prime number till n=5000)]

//Why are we using callbacks here?
//Callbacks are used to run tasks in parallel which ends up saving a lot of time.
//In the earlier (FIrstlackofcallbacks.js) task 1 starts -> task 1 ends -> task 2 starts -> task 2 ends
// But in this program  task 1 starts -> task 2 starts -> task 2 ends -> task 1 ends

let parser=require("minimist");
let fs=require("fs");
let args=parser(process.argv);


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

//Task 1 begins.
let timei=Date.now();
console.log("Starting task1 at"+timei);


// let timee=Date.now();
// console.log(timee);
// let stext=fs.readFileSync(args.source,"utf-8"); //earlier, in this method we took the data in a variable we named as stext(in FirstLackofcallback.js).

fs.readFile(args.source,function(data){
    let timee=Date.now();
    console.log("Finishing task1 at"+timee);
    console.log(timee-timei);
})
//read difference between readFile() and readFileSync()
//here we are taking the data in a function(and using readFile instead of readFileSync) by passing the function as an argument so that the idol time is minimized. 
//Task 1 Ends.

//Task 2 Starts
let t3=Date.now();
console.log("Starting task2 at"+t3);

let arr=[]
for(let i=2;i<args.n;i++){
let isprime=Isprime(i);
if(isprime==true){
arr.push(i);
}
}
let t4=Date.now();
console.log("Finishing task2 at"+t4);
//Task 2 ends
console.log(t4-t3)//time taken for the task of calculating all the prime numbers.