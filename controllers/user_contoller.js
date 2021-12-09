module.exports.profile = function(req,res){


    // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)
  res.cookie('user_id:',"TSESSSS") // to add
  res.cookie('TeST:',"MNNEW") // to add
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

       return  res.send('<H1>I am creating here User </H1>')
    //TODO

}

module.exports.session =function(req,res){


    //TODO
    return res.send('<H1>I am creating seesion here </H1>')

}

