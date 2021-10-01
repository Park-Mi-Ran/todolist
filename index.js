//필요한 모듈들을 불러온다.
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8000;
const db = require('./models/database');
// CORS 설정 - 모든 origin에서의 요청을 허용, 특정 origin을 제한하고싶은 경우에는 옵션들을 추가해주면 된다.
app.use(cors());

// 모든 Origin을 허가할 때 3번줄과 11번줄을 사용하지않을 때
// app.use((req, res, next) => {
//  res.header("Access-Control-Allow-Origin", "*");
// });

// 특정 Origin을 허가할 때
// app.use((req, res, next) => {
//  res.header("Access-Control-Allow-Origin", "특정 url 주소");
// });


//mongoose
mongoose.connect(db.mongoURI).then(() => {
    console.log('MongoDB connected...');
}).catch(err => {
    console.log(err);
});


//routes
app.get("/", (req, res) => {
    res.send("Hello world");
  });

app.listen(port, () => {
    console.log(`listening on port ${port} \nhttp://localhost:8000/`);
 }); 
 
 //listen()메소드를 호출하여 서버를 실행하여 대기