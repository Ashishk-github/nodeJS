const express=require('express');
const bodyParser=require('body-parser');

const app=express();

const adminRouter=require('./routes/admin');
const shopRouter=require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/admin',adminRouter);
app.use('/shop',shopRouter)
app.use((req,res,next)=>{
    res.status(404).send('<h1>PAGE NOT FOUND</h1>')
})
app.listen(4000);
