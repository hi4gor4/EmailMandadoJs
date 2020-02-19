const express = require('express');
const router = express.Router();

router.get('/comentario/:postid', (req,res)=>{
    switch(req.params.postid){
        case '1':
            res.json({
                conteudo: 'Hiago perdeu a caneca pros correios',
                email: 'Cleytinho@ecomp.uefs.br',
                autor: 'Cleytinho'
            })
        break;
        case '2':
            res.json({
                conteudo: 'Hasldkfhjasdjkau a caneca pros correios',
                email: 'asdfasdfasdaf',
                autor: 'Casdfasdaf'
                })
        break;
        default:
            res.json({
                conteudo: 'safe',
                email: 'Safe não',
                autor: 'Safe mesmo'
            })
    }
})

module.exports = router;