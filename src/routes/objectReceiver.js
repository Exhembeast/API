const {Router} = require('express')
const router = Router();

router.get('/objectReceiver', (req, res) => {

    const body = req.body;
    text = JSON.stringify(body);
    const obj = JSON.parse(text);

    //funcion que verifica si existe algun objeto vacio con constructor de tipo Object
    function objetoVacio(value) {
        return (
            Object.keys(value).length === 0 && value.constructor === Object
        );
    }

    //ciclo para verificar entrada por entrada si contienen null, false o empty
    Object.keys(obj).forEach(key => {
        if (
            !obj[key] ||
            obj[key].length === 0 ||
            (objetoVacio(obj[key]))
        ) {
            delete obj[key];
        }
    });

    res.send(obj);
});

module.exports= router;