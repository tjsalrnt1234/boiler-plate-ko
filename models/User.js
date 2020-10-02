const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //trim:공백없애줌
        unique: 1 //중복이메일 안되게
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { //사용자와 관리자로 구분
        type: Number,
        defalut: 0
    },
    image: String,
    
    token: {
        type: String
    },
    tokenExp: { //토큰유효기간
        type: Number
    }

})

const User = mongoose.model('User',userSchema)

//다른파일에서도 쓸 수 있게
module.exports = { User }