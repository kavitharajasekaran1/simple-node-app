const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Hi welome to aws application")
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log (`app is listening on ${port}`))