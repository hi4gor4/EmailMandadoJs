const express = require('express');
const router = express.Router();

router.get('/comentario/:postid', (req,res)=>{
    if (req.params.postid == 1){
        res.json({
            conteudo: 'Hiago perdeu a caneca pros correios',
            email: 'Cleytinho@ecomp.uefs.br',
            autor: 'Cleytinho'
        })
    }
    else if (req.params.postid == 2) {
        res.json({
        conteudo: 'Hasldkfhjasdjkau a caneca pros correios',
        email: 'asdfasdfasdaf',
        autor: 'Casdfasdaf'
        })
    }
    else {
        res.json({
            conteudo: 'safe',
            email: 'Safe não',
            autor: 'Safe mesmo'
        })
    }



})

module.exports = router;