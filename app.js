const express = require('express');
const app = express();


//Create home route
app.get('/',(req,res)=>{
    res.send('Hello, World!');
});

app.get('/products',(req,res)=>{
    res.send("Welcom to our Products page")
});

const PORT = process.env.PORT || 3000 ;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
});