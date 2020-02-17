const express = require('express');
const router = express.Router();

router.get('/postagens', (req, res)=>{
    res.json({
        titulo: 'Primeira postagem',
        descição: 'Vários problemas! :C', 
        autor: 'Cleyton'
    })
})

module.exports = router;
