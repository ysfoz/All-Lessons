const express = require('express');

const app = express()
const PORT = process.env.PORT || 5001
const router =require('./routes/router')

app.use('/',router)

app.listen(PORT,() => {
    console.log(`listening port ${PORT}`)
});