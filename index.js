const express = require('express') //모듈 가져옴
const app = express()
const port = 5000
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const config = require('./config/key');
const { User } = require("./models/User");

app.use(bodyParser.urlencoded({extended: true})); //application/x-www-form-urlencoded 분석해서 가져오
app.use(bodyParser.json()); //application/json

//몽고DB연결
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('dddddddd')
})


app.post('/register', (req, res) => {
  //회원 가입 할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err}) //save실패시 err메세지
    return res.status(200).json({ //성공시 출력
      success: true
    })
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})