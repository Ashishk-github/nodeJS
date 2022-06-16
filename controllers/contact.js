const contactedList=[];
const path=require('path');

exports.getInfo=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','contactus.html'));
};
exports.success=(req,res,next)=>{
    contactedList.push(JSON.parse(JSON.stringify(req.body)));
    console.log(contactedList);
    res.sendFile(path.join(__dirname,'..','views','success.html'));
}