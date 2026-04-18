/** Problem 04 - (Delete / Store) */
var fileName= "#exp.mp4";
//write your code here
let readFile=
    fileName.includes("pdf") || fileName.includes('docx');
    if(readFile || fileName[0]=='#'){
        console.log("Store");
    }
    else{
        console.log("Delete");
    }