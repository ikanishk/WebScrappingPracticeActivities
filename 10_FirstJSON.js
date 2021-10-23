//node 10_FirstJSON.js --dest=teams.json
//This program creates a JSOn and saves it on a file called "teams.json" after creating the file with the same name.
let minimist=require("minimist");
let fs=require("fs");

let args=minimist(process.argv);
console.log(args.dest);

//JSON = Javascript Object Notation
//JSON means saving data in the same format as Javascript notations.
let s1={
    name:"Kanishk",
    age: 20
}

let s2={
    name:"P2",
    age: 20
}
//s1 and s2 are just JavaScript Objects
let studarr=[s1,s2]; //studarr is just an array of JS Object
let json=JSON.stringify(studarr);//This is a JSON (Javascript Object Notation)

//To make JSON from JS Objects => Stringify JS Objects
fs.writeFileSync(args.dest,json,"utf-8");
console.log(s1.name);