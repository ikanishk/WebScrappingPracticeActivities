//node FirstExcelCreate.js --source=teams.json --dest=matches.xls
//npm install excel4node

//This program fetches data from our teams.json file and prints them in an excel file.
let minimist= require("minimist");
let fs=require("fs");
let excel=require("excel4node");
const workbook = require("excel4node/distribution/lib/workbook");

let args=minimist(process.argv);
// console.log(args);

let teamsjson=fs.readFileSync(args.source,"utf-8");//Try not to use readfilesync, instead  use readfile.
let teams=JSON.parse(teamsjson);

console.log(teams[0].matches[0].opponent);
console.log(teams[0].matches[0].result);

let wb=new excel.Workbook();//creating a new workbook

let hstyle=wb.createStyle({
    font:{
        color:"red"
    },
    fill:{
        type:"pattern",
        patternType:"solid",
        fgColor:"#00FF00"
    }
}); //creating a new style template called hstyle.

for(let i=0;i<teams.length;i++){ //runs through all the teams and creates a seperate sub-sheet inside the excel for every team.
let sheet=wb.addWorksheet(teams[i].name);
sheet.cell(1,1).string("Opponent").style(hstyle);//using our hstyle tempelate.
sheet.cell(1,2).string("Result").style(hstyle);
sheet.cell(1,4).string("Rank").style(hstyle);
sheet.cell(1,5).number(teams[i].rank); //Since rank is a number and not a string.

for(let j=0;j<teams[i].matches.length;j++){
    let vs=teams[i].matches[j].opponent;
    let result=teams[i].matches[j].result;
    
    sheet.cell(2+j, 1).string(vs);
    sheet.cell(2+j, 2).string(result);
}


}
console.log(args.dest);
wb.write(args.dest); //workbooks are written in the matches.xls
