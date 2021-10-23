//using axios library
// node .\FirstWebDownload.js --dest="download.html" --url="https://www.espncinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results"
let minimist=require("minimist");
let fs=require("fs");
let axios=require("axios");

let args=minimist(process.argv);
console.log(args.dest);
console.log(args.url);

let downloadpromise=axios.get(args.url); //downloadpromise variable is making a promise that whenever it will receive the data from the given url, it will store it in this varioable.
downloadpromise.then(function(response){ //the "then" function initiates when downloadpromise variable has received the required data.
                                         //response in function(response) is the http response code that we receive whenever we call a url
                                        
                                        //promises are not function themselvees, they are objects whose functions are then and catch.
    let html=response.data;
    fs.writeFileSync(args.dest,html,"utf-8");
}).catch(function(err){ //this catch function is for "Hazard Control" for if the .then function does not run for some reason.
    // console.log(err);
})
