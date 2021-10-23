// node 12A_FirstFolderCreation.js --source=teams.json --dest=root

let minimist= require("minimist");
let fs=require("fs");
let excel=require("excel4node");
let args=minimist(process.argv);

let teamsJSON=fs.readFileSync(args.source,"utf-8");
let teams=JSON.parse(teamsJSON);
console.log(teams.length);
console.log(args.dest);

for(let i=0;i<teams.length;i++){
    fs.mkdirSync(args.dest+"/"+teams[i].name);
}