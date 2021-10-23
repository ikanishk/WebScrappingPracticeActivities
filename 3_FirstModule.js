// What is a node?
// Node is a process that runs a JS file.
// Node is a compiler or RTE(Run Time Environment) to run programs.
// All node libraries are registered on NPM.


//npm install minimist
//we don't have to go in detail of minimist, the syntax of require is the same
//for every NPM library.
let parser= require('minimist');
let args= parser(process.argv);

console.log(args);

// node FirstModule.js --name Kanishk --age 20
// if we run the above command on terminal, it will assign name as Kanishk and age as 20 and we can further manipulate it.
let name=args.name;
let age=args.age;

if(age>30){
console.log("Hello"+name+"Go home.")
}

else{
console.log("Hello "+name+" Come on in.")
}

