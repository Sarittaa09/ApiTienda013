const exp = require('express');
require('dotenv').config()
const app = exp()
const router = require('./routes/router')

app.use(exp.json()); 
app.use(exp.urlencoded({extended: false})); 
app.use('/v1', router)


app.listen(process.env.PORT, ()=>{
    console.log('Servidor en el puerto ' + process.env.PORT)
})