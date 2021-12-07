const express = require('express');
const app= express();
const port = 8000;

app.listen(port,(err)=>{

    (err)?console.log(`Error: ${err}`):console.log(`INFO: Sever is running on ${port}`)

    return;

})

app.get('/',(req,res)=>{

    res.send('<h1> To DO !!!</h1>')
})