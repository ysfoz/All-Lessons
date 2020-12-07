const accessControl = (req,res,next)=>{
    console.log('access control');
    next();
};
module.exports = {accessControl}