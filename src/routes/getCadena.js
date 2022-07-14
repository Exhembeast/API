const {Router} = require('express')
const router = Router();

router.get('/getCadena', (req, res) => {

    const body = req.body;

    let stringRelevant = {
        size: body.length,
        value: body.toString(),
        reverse: body.toString().split("").reverse().join("")
    }
    // res.send(stringRelevant)

    res.send(`
    Tamaño de la cadena: ${stringRelevant['size']}
    \n valor inicial: ${stringRelevant['value']}
    \n valor al reves ${ stringRelevant['reverse']}`)

});

module.exports = router;