// node .\FirstBigFile.js --dest=big.data we have to run this file to make a file named "big.data" and store large no. of values in it.
let minimist=require("minimist");
let fs=require("fs");

let args=minimist(process.argv);
console.log(args.dest);//here dest is the function of args which has minimist

let arr=[];
for(let i=0;i<=500000;i++){
    arr.push(i);
}
let str=arr.join("\n");
console.log(str)

fs.writeFileSync(args.dest,str,"utf-8");//File nahi h to bana dega
fs.appendFileSync(args.dest,str,"utf-8");//existing file me append krega