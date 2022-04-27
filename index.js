/*const{createServer} = require("http")
let serve = createServer((request,response)=> {
    response.writeHead(200,{"Content-type":"text/html"});
    response.write('<h1>Olá Mundo</h1>');
    response.end();
});
serve.listen(8000);
console.log("Projeto iniciado !!");*/
const { response } = require('express');
let express = require('express');
const { get } = require('express/lib/response');
let app = express();

/*app.get('/',function(req,res){
    res.send('ROTA GET');
});

app.get('/rota1',function(req,res){
    res.send('rota 1');
});

app.listen(3000,function(){
    console.log('projeto iniciado na porta 3000');
});*/

app.route('/book')
    .get(function(req, res){
        res.send('Get a random book');
    });