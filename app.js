const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const rootDir=require('./util/path');
const app=express();

const adminRouter=require('./routes/admin');
const shopRouter=require('./routes/shop');
const contactUs= require('./routes/contact');
const error=require('./controllers/errors');

app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminRouter);
app.use('/',contactUs);
app.use('/',shopRouter);
app.use(error.e404);
app.listen(3000);
