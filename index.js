const express = require('express');

const expressLayouts = require('express-ejs-layouts')
const db = require('./config/mongoose')

const app= express();
const port = 8000;


//for assets

app.use(express.static('./assets')) ;

//For  layouts

app.use(expressLayouts);

//For Script and CSS
app.set("layout extractScripts", true)
app.set("layout extractStyles", true)

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