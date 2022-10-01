console.log("before");
//setTimeout(()=>{},5000);
// sync and async
//no need of callback functions for sync, but must for async
const fs = require("fs");

//writeFile
fs.writeFileSync("./contents/demofile.txt", "Let's learn JS!")

//appendFile
fs.appendFileSync("./contents/demofile.txt", "Let's learn nodejs!")

//Rename
// fs.renameSync("./contents/demofile.txt", "./contents/demo.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Renamed!");
//     }
// });

//async

//readFile
fs.readFile("./contents/demo.txt","utf-8",(err, data)=>{
    if(err){
        console.log(err);
    } else {
        console.log(data);
        
    }
});
// //fs.readFileSync
// //fs.readFile

fs.writeFile(
    "./contents/demofile.txt",
    data,
    (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("write successful!");
        }
    }
);

console.log("after");

//Delete
// fs.unlink("./contents/demo.txt",(err)=>{
//     if(!err){
//         console.log("Deleted successfully!")
//     }
// });