// node 9_FirstProcessingHTML.js --source=download.HTML
//In here, we are taking the html from the "download.html" file in which we stored the html of a page in the previous activity and then we'l process the data further.
let minimist=require("minimist");
let fs=require("fs");
let jsdom=require("jsdom");//This library loads HTML and helps find information.

let args=minimist(process.argv);
console.log(args.source);

fs.readFile(args.source,"utf-8",function(err,html){ //In this function, we pass error(err) and html(HTML of download.html) in a callback function which will get called only when download.html responds to the call.
    let JSDOM=jsdom.JSDOM;
    let dom=new JSDOM(html);//We assign a variabe called dom to the DOM of the html we have put as an argument.
    let document=dom.window.document; //The window here implements the window fuctionalities such as "window.open" etc. (to implement these, we have to open inspect => console and type window.open(google.com))
    
    let descs=document.querySelectorAll("div.description"); //this statement fetches the data of all the divs from dowload.html through queryselctor which creates an array of all the occurences of div.
    for(let i=0;i<descs.length;i++){ //Here we iterate the descs array and prints the textcontent from descs.
        console.log(descs[i].textContent);
    }
    //queryselector returns the first element whereas queryselectorAll returns an array of all the elements.
    
    


    
    

})
//What does the browser do?
    //  Browser fetches the HTML sent by the server and does 2 operations:
    //  1) Makes a View Source for the User
    //  2) Makes a DOM(Document Object Model) for the developer.

    //What is DOM?
    //It's a tree kinda structure in which the <HTML> is broken down into children in the order: <HTML> => <Body> => <p> and so on.