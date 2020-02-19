const express = require('express');
const router = express.Router();

const pdf = require("html-pdf")

router.get('/relatorio/:nome', (req,res)=>{
    var x = './'+req.params.nome
    pdf.create("Meu nome é joão", {})
    .toFile(x,(err, res)=>{
        if(err){
            console.log("Deu ruim")
        }else{
            console.log(res);
        }
    })
    res.json({
        dale: "dole"
    })
})

module.exports = router;