//const express = require('express')

import express from 'express';

const app = express();
const port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

pp.post('/signin' , (req,res) =>{
    return res.redirect('/');//로그인 성공하면 메인페이지 이동
})

pp.post('/signup',(req, res)=>{
    return res.status(302).json({
        success:'ok',
        message:'회원가입 성공'
    })
})


app.get('/', (req, res) =>{
    res.send('<h1>Hello Wored!</h1>')
})
app.get('/search', (req, res) =>{
    res.send('<h1>Hello Search Wored!</h1>')
})
app.post('/signin', (req, res) =>{
    const {user_id , user_pass} = req.body; //id, pw를 두가지 변수에 구조분해할당
    if (user_id === '111'){ //실제로는 DB에서 전체 회원 중 일치하는 ID를 찾아서
        if(user_pass === '1234'){ //비밀번호까지 일치하는지 비교해서
            console.log('관리자 로그인!');//맞다면 , 관리자 로그인을 알리고, 클라이언트에 로그인 계정명을 
            res.status(401).json({
                success: 'ok',
                username: 'admin'
            })
        }else{
            res.status(404).json({
                success : 'fail',
                message : '로그인 실패'
            })
        }
        return res.redirect("/"); //로그인 성공하면 메인페이지 이동 
    }
    console.log(req.body); //request의 줄임말, req(=요청)
});

app.post('/signup', (req, res) =>{
    console.log(req.body); //request의 줄임말, req(=요청)
})

app.listen(port,() =>{
    console.log('server is running on port', port);
})