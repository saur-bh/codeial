const { route } = require("../routes")

module.exports.home = function(req,res){

    return res.end('<H1>Controller is up for Codieal</H1>') ;

    
}