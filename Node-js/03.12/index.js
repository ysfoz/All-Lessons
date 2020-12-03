const express = require("express");
const path = require("path");
const MainRouter = require("./routes/MainRouter");
const UserRouter = require("./routes/UserRouter");
const port = process.env.port || 5000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use("/", MainRouter);
app.use("/user", UserRouter);

app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});

// TODO:  bu seklide dosyayi eran agondermis olduk, ama dosya gonderme islemleri bu sekilde yapilmiyor
// app.get('/',(request,response)=>{
//     console.log('get request to /');
//     response.sendFile(path.join(__dirname,'foto.png'))  
// })