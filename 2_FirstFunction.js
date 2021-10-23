//process.argv is an array which stores the address of the file and node in its first and second elements follwed by the input we provide it.
//function in JS
//To find prime number till n.
// we need not mention the datatype in JS as it is a dynamically typed language.
let clarg=process.argv;
let n=parseInt(clarg[2]);

for(let i=2;i<=n;i++){
let prime=Isprime(i);
if(prime==true){
console.log(i);
}
}

function Isprime(x){

    let isprime=true;

    for(let i=2;i*i<=x;i++){
    if(x%i==0){
    isprime= false;
    break;
    }

    return isprime;
    }
}

