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

module.exports.login = function(req,res){

    return res.render('login',{
        title:"LogMe-IN"
    }) ;

    
}

module.exports.signup = function(req,res){

    return res.render('signup',{
        title:"Sign-Up"
    }) ;

    
}


module.exports.userCreate =function(req,res){

        res.redirect('home',{
            title:"User Created"
        })
    //TODO

}

module.exports.session =function(req,res){


    //TODO

}

