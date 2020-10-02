const express = require('express') //모듈 가져옴
const app = express()
const port = 5000
const mongoose = require('mongoose')

//몽고DB연결
mongoose.connect('mongodb+srv://seonmi:wjdal91380@boiler-plate.8hsb3.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('안녕하세요!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})