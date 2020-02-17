const express = require('express');
const router = express.Router();

router.get('/comentario/:postid', (req,res)=>{
    res.json({
        conteudo: 'Hiago perdeu a caneca pros correios',
        email: 'Cleytinho@ecomp.uefs.br',
        autor: 'Cleytinho'
    })
})

module.exports = router;