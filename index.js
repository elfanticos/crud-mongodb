'use strict'

const app = require('./src/app'),
mongoose = require('mongoose');

// connectar bd
mongoose.connect('mongodb://localhost:27017/curd-mongo')
    .then(db => console.log('bd conectadas'))
    .catch(err => console.log(err));


app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en puerto ${app.get('port')}`);
});