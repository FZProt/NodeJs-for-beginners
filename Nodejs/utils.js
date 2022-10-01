const HelloFunc = require('./helloWorld');
HelloFunc.Hello()
console.log(HelloFunc.name);

setInterval(()=>{
    HelloFunc.Hello();
}, 1000);

setTimeout(()=>{
    console.log(HelloFunc.name);
},5000);

//local module
//Global module
//3rd party module/package
