const fs= require('fs')
fs.writeFileSync('index.html', 'taking hold')
const fs = require('fs');

cvar fs = require('fs'),
path = require('path'),    
filePath = path.join(__dirname, 'start.html');

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
if (!err) {
    console.log('received data: ' + data);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
} else {
    console.log(err);
}
});