const express =require('express');
const os = require('os');
const path = require('path');

const app = express();

const port = 5000;
const host = 'http://localhost';

app.get('/',(req,res) => {
    res.send('hello from express')
})
const wrongPath = `${__dirname}// testfolder` // iki slash oldugu icin hatali
console.log(path.normalize(wrongPath)) // bu seklide hatalari ayiklamis olduk

const costumPath = path.join(__dirname,'/testname')
console.log(costumPath)

const extension = 'foto.png'
console.log(path.extname(extension)) // bu sekilde dosya uzantisini gormek mumkun

app.get('*',(req,res) => {
    res.send(`server os type is ${os.type} , ${os.platform},  ${os.freemem}, ${os.totalmem}`)
    // isketim sistemine dair bilgiler bu sekilde elde edilebilir.
})

app.listen(port,() => {
    console.log(`listinig port on ${host} : ${port}`)
});