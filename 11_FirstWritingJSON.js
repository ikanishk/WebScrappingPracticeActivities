//node 11_FirstWritingJSON.js --dest=teams.json
//This program creates a JSOn and saves it on a file called "teams.json" after creating the file with the same name.
let minimist=require("minimist");
let fs=require("fs");

let args=minimist(process.argv);

let teams=[
    {
        name:"India",
        rank:1,
        matches:[
            {
                opponent:"England",
                result:"won"
            },
            {
                opponent:"Australia",
                result:"loss"
            }
            ]
    },

    {
        name:"Australia",
        rank:2,
        matches:[
            {
                opponent:"England",
                result:"won"
            },
            {
                opponent:"India",
                result:"loss"
            }
            ]
    },
    {
        name:"England",
        rank:3,
        matches:[
            {
                opponent:"India",
                result:"won"
            },
            {
                opponent:"Australia",
                result:"loss"
            }
            ]
    }
]

console.log(teams[2].matches[1].opponent); //Through this statement, we fetch the opponent from the matches array in the teams array of the JSO.

let json=JSON.stringify(teams);//This is a JSON (Javascript Object Notation)
//Stringify converts JSO into JSON as JSO can neither be saved or printed.
fs.writeFile(args.dest,json,"utf-8",function(err,res){
if(err){
    console.log(err);
}

if(res){
    console.log(res);
}
});