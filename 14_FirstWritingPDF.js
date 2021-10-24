// npm install pdf-lib
// node 14_FirstWritingPDF.js --source=teams.json --dest=root
// 
let minimist= require("minimist");
let fs=require("fs");
let excel=require("excel4node");
let path=require("path");
let pdf=require('pdf-lib');

let args=minimist(process.argv);
let teamsJSON=fs.readFileSync(args.source,"utf-8");
let teams=JSON.parse(teamsJSON);

fs.mkdirSync(args.dest); //creating root folder

for(let i=0;i<teams.length;i++){
let teamfolder=path.join(args.dest, teams[i].name); //iterate all the teams and make seperate folders for all of them.
fs.mkdirSync(teamfolder);

for(let j=0;j<teams[i].matches.length;j++){
let matchfileName=path.join(teamfolder,teams[i].matches[j].opponent+".pdf");
createScoreCard(teams[i].name,teams[i].matches[j],matchfileName);
}
}

function createScoreCard(teamname,match,matchfileName){
let t1=teamname;
let t2=match.opponent;
let result=t1+" "+match.result;

// let pdfdocument=pdf.PDFDocument; //using pdf-lib

let templatebytes=fs.readFileSync("Template.pdf");//this function is used to read the bytes of the pdf document.
let promisetoloadbytes=pdf.PDFDocument.load(templatebytes); //the promisetoloadbytes variable is making a promise that it will pass itself to the function once it executes completely.
promisetoloadbytes.then(function(pdfdoc){ //after the above line executes, the then function is triggered and the function in it is called.
    let page=pdfdoc.getPage(0);//we are getting the firstpage of the pdf.
    page.drawText(t1,{
        x: 300, //the x-y co-ordinates are mentioned to position the text in the pdf.
        y: 725
    });//we make changes in the pdf.

    page.drawText(t2,{
        x: 300,
        y: 690
    });

    page.drawText(result,{
        x: 300,
        y: 650
    });

    let promisetosave=pdfdoc.save();//A promise is made to save the changed file and store it in promisetosave.
    promisetosave.then(function(changedBytes){ //when the save promise is executed, the bytes of the new changed file ae passed.
        fs.writeFileSync(matchfileName,changedBytes);
    })
})


}

