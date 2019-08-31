const express = require('express');
const app = express();
const router = require('./router');

app.get('/getWriter', router.getDetail);

app.get('/getDetail', router.getWriters);

app.post('/doLogin', router.doLogin);

app.post('/doRegister', router.doRegister);

app.post('/checkExit', router.doCheckExit);

app.listen(3001);