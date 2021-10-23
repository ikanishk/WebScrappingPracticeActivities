//node 11.1_FirstReadJSON.js --source=teams.json
//This program reads and prints the JSON we created in the previous file.
let minimist=require("minimist");
let fs=require("fs");

let args=minimist(process.argv);

fs.readFile(args.source,"utf-8",function(err,json){ //args.source file ko utf-8 form me read karna and jo aaye usey function me pass kar dena.
    if(err){
        console.log("Nopes");
    }
    else{
        console.log(json);
        let teams=JSON.parse(json);//we are converting the JSON file named json(inside the parse func) which we read and we are converting it back as JSO.

        console.log(teams[2].matches[1].opponent);
    }

})

//JSON me hm objects ko access nahi kar sakte coz hmne JSO ko stringify karke JSOn bnaya tha and JSON is just a string.
//For accessing elements from JSON, we have to make it a JSO again.

