//A
var os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());

//B 
const chalk=require('chalk')
const colors=require('colors')
console.log(chalk.red('hello'))
console.log(colors.rainbow('welcome to NODEjs'))

//C
var math=require("./user defined math")
var ops=math
console.log(ops.add(2,3))
console.log(ops.sub(2,3))
console.log(ops.mul(2,3))
console.log(ops.div(2,3))

//D
var counter = 5;

function makeRequst(options, i) {
    // do your request here
}

function myFunction() {
    alert(counter);

    // create options object here
    //var options = {
    //    host:'www.host.com',
    //    path:'/path/'+counter
    //};
    //makeRequest(options, counter);

    counter--;
    if (counter > 0) {
        setTimeout(myFunction, 1000);    
    }
}

