const express = require('express');
const path = require('path');
const Index = require('./routes/index');
const Register = require('./routes/register');


const app = express();
const port = process.env.PORT || 8080

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use('/', Index)

app.use('/register',Register)


app.listen(port, () =>{
    console.log('ales in ordnung')
})

