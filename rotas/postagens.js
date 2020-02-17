const express = require('express');
const router = express.Router();

router.get('/postagens', (req, res)=>{
    res.json({
        título: 'Primeira postagem',
        descição: 'Vários problemas! :C', 
        autor: 'Cleyton'
    })
})

router.get('/postagens/comentarios', (req,res)=> {
    res.json({
        Nome: 'João',
        Email: 'João@pédefeijão.com',
        Comentário: 'O gigante é um corno'
    })
})

module.exports = router;
