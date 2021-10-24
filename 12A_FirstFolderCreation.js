// node 12A_FirstFolderCreation.js --source=teams.json --dest=root

let minimist= require("minimist");
let fs=require("fs");
let excel=require("excel4node");
let path=require("path");

let args=minimist(process.argv);

let teamsJSON=fs.readFileSync(args.source,"utf-8");
let teams=JSON.parse(teamsJSON);
console.log(teams.length);
console.log(args.dest);

for(let i=0;i<teams.length;i++){
    let foldername=path.join(args.dest,teams[i].name); //The path library is used to attach "/" or backslash depending on windows or Mac.
    fs.mkdirSync(foldername); 
}