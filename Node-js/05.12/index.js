const express = require('express');
require('dotenv').config() // dotenv paketi kuruyoruz, bu sekilde env doyasina ekleme yaptik
const logger =require('morgan')  // log kaydi lamak icin kullaniliyor. alttaki gibi bir log doner
//::1 - - [Sat, 05 Dec 2020 15:23:56 GMT] "GET / HTTP/1.1" 200 6 "-" "PostmanRuntime/7.26.5"
var cookieParser = require("cookie-parser");

const app =express();
console.log(process.env)
const port = process.env.PORT || 5001

// TODO:middleware
app.use(cookieParser());
app.use(logger());
app.use((req,res,next)=> {
    console.log("Cookies: ", req.Cookies);
     // use ile cevap gonderilirse mutlaka islem yapar. o yuzden daha tehlikeli aslinda 

    next()
})
app.use((err,req,res,next)=> {
    console.log('auth')  // next ile sonraki isleme geciyor, taki bir cevap gonderene kadar. son olarak ta error icin parametre alir
   
    next()
})
app.use((req, res, next) => { //Authentication, burda eger giris yaptiysa alttakine gec gibi bir uygulama yapiyoruz
    console.log("Auth");
    // some jobs
    res.isAuth = true;
    next();
  });
  app.use((req, res, next) => {
    console.log("Controller // db");
   if (res.isAuth) {
       console.log("Private data")
   } else {
       console.log("not auth")
   }
    next();
  });
  app.use((req, res, next) => {
    console.log("middleware: 3");
    if (true) {
      res.send("send");
    }
  });


// app.use(()=> console.log('midleware2'))  // use ile cevap gonderilirse mutlaka islem yapar. o yuzden daha tehlikeli aslinda 
// app.use(()=> console.log('midleware3'))  // use ile cevap gonderilirse mutlaka islem yapar. o yuzden daha tehlikeli aslinda 
// app.use(()=> console.log('midleware4'))  // use ile cevap gonderilirse mutlaka islem yapar. o yuzden daha tehlikeli aslinda 
// app.use(()=> console.log('midleware5'))  // use ile cevap gonderilirse mutlaka islem yapar. o yuzden daha tehlikeli aslinda 

app.get('/user',()=>{});

app.listen(port,() => {
    console.log('litening')
})


