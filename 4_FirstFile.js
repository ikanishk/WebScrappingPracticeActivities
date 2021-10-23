//read file, capitalize every word, write the file.
let minimist = require('minimist');
let args=minimist(process.argv);

let fs=require("fs");
let stext=fs.readFileSync(args.source,"utf-8");

let word=stext.split(" ")
console.log(word);

// node FirstFile.js --source f1.txt --dest f2.txt
// using the above statement might allot f1 as source and f2 as dest.
for(let i=0;i<word.length;i++){
word[i]=word[i].toUpperCase();
}

let dtext=word.join(" ");
fs.writeFileSync(args.dest,dtext,'utf-8');
console.log(dtext);
