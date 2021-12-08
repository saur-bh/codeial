const express = require('express');
const app= express();
const port = 8000;


// user express route

app.use('/', require('./routes/index')) ; 


//Set up view engine : install ejs 

app.set('view engine', 'ejs');
app.set('views','./views')




// Listen the server 
app.listen(port,(err)=>{

    (err)?console.log(`Error: ${err}`):console.log(`INFO: Sever is running on ${port}`)

    return;

})