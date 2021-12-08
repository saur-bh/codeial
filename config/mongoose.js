const mongoose = require('mongoose');

// connect to db 
mongoose.connect('mongodb+srv://admin:admin@contacts-list.qvt9b.mongodb.net/contacts-list?retryWrites=true&w=majority')

// acruie the connection 
const db= mongoose.connection ;

//error;
db.on('error',console.error.bind(console,'error connectingg'))

db.once('open',()=>{

    console.log('You are connected to database.')
})


module.exports=db;