const express=require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const Mydata=require('./models/articleSchema')

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.sendFile('./views/first.html', { root: __dirname })
})

app.post('/', (req, res) => {
    console.log(req.body)
    const data=new Mydata(req.body)
    data.save()
    .then(()=>{res.redirect('./views/sucess.html')})
    .catch((err)=>{console.log(err)})
  })

mongoose.connect('mongodb+srv://jassyalkady:NfSeuablRH6jDxzr@cluster0.etidetd.mongodb.net/collection?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })})
.catch((err)=>{console.log(err)});