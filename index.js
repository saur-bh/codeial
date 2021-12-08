const express = require('express');
const app= express();
const port = 8000;


// user express route

app.use('/', require('./routes/index')) ; 


// Listen the server 
app.listen(port,(err)=>{

    (err)?console.log(`Error: ${err}`):console.log(`INFO: Sever is running on ${port}`)

    return;

})