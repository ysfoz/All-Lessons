const { json } = require('express');
const express = require('express');
const {accessControl} = require('./middleware')

const users = [
    {id:1,name:'yusuf',place:'kassel'},
    {id:2,name:'talha',place:'dortmund'}
]

const app = express();
const PORT = 3200
app.use(express.json())

app.use(accessControl) // bu seklide yazarsan tum isteklerden once calisir

app.get('/users',(req,res) =>{ // middleware i buraya da 2. siraya yazabiliriz, bu sefer sadece bu istek icin calisir.
    console.log(req.body)
    res.json({
        success:true,
        data: users
    })
})
app.post('/users',(req,res) =>{ // post islemi veri ekleem islemlerinde kullanilir.
    users.push(req.body) // postman ile body kismindan yeni bir object ekledik onu da once yukarida app.use(express.json())
    // diyeek sonrasinda da burada push ederek users listemize ekledik, ama db miz olmadi icin gecici oldu.
    res.json({
        success:true,
        data: users
    })
})
app.put('/users/:id',(req,res) =>{ // put ile veri guncellemsi yapiliyor. postman ile degistirdigimiz veri leri bu sekilde aldik.
   const id = parseInt(req.params.id);
    for(let i in users){
        if(id === users[i].id){
            users[i] = {
                ...users[i],
                ...req.body
            }
        }
    }
    res.json({
        success:true,
        data: users
    })
})
app.delete('/users/:id',(req,res) =>{  // veri silmek icin kullanilir.
    const id = parseInt(req.params.id)
    for(let i in users){
        if(id === users[i].id){
            users.splice(i,1)
        }
    }
    res.json({
        success:true,
        data: users
    })
})

app.listen(PORT,() =>  console.log('listenig'))