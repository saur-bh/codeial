const mongooose = require('mongooose');
const userSchema = new mongooose.Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },
    name: {
        type:String,
        required:true,
    },
    password:{

        type:String,
        required:true
    }

},{
    timestamps:true
});

const User = mongooose.model('User',userSchema);


module.exports= User;