const { route } = require("../routes")

module.exports.home = function(req,res){

    return res.render('home',{
        title:"My title saurabh"
    });

    
}