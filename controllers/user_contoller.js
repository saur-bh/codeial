const User = require('../models/user')
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

        console.log(req.body);
    // TODO :Code for creating user in dataBase 
        if(req.body.password != req.body.confirm_password){return res.redirect('back');}
     
       if(User.findOne({email:req.body.email}, function (err, user) {

            if(err){console.log('Culd not located user in dataBase',err); return;}

            if(!user){
                User.create(req.body,function(err,user){

                    if(err){console.log('Could not create user, check DB',err); return;}

                    return res.redirect('/users/login') ;


                });
            }else{
                res.send('ddddddddd') ;
            }


       }));

       

}

module.exports.session =function(req,res){


    //TODO
    return res.send('<H1>I am creating seesion here </H1>')

}

