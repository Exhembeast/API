const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 8080);

//para recibir datos en forma de json
app.use(express.json());
//para recibir cadenas de texto
app.use(express.text());
app.use(express.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

//routes
app.use(require ('./routes/objectReceiver'));
app.use(require ('./routes/getCadena'));

//starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
});