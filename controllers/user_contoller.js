module.exports.profile = function(req,res){

    return res.render('user_profile',{
        title: "I AM PROFILE "
    })

    
}

module.exports.users = function(req,res){

    return res.render('users',{
        title: "I AM USER "
    })
    
}
