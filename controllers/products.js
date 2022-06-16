const products=[];
const path=require('path')

exports.addProduct=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','add-product.html'));
};
exports.getProduct=(req,res,next)=>{
    products.push(JSON.parse(JSON.stringify(req.body)));
    console.log(products);
    res.redirect('/');
}
exports.shop=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','shop.html'));
}