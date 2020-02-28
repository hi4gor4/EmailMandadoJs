const express = require('express');
const router = express.Router();
const fs = require("fs");
const pdf = require("html-pdf");
const PDFKit = require('pdfkit');
const pdfByKit = new PDFKit();
const conteudo = fs.readFileSync('./rotas/relato.html','utf8')

router.get('/relatorio/:nome', (req,res)=>{
    var x = './'+req.params.nome+'.pdf'
    pdf.create(conteudo, {})
    .toFile(x,(err, jj)=>{
        if(err)
            console.log("Erro ao salvar o arquivo.")
        else
            console.log("Arquivo salvo!") 
    })

    pdf.create(conteudo,{format: 'letter'}).toStream((err, stream) =>{
      if (err)
        console.log("Erro ao exibir o arquivo!");
      else{
        console.log("Arquivo exibido.")
        stream.pipe(res);
      }
    })
})

  router.get('/relatorioPDFKIT', (req,res)=>{
    pdfByKit.text('XDDD');
    pdfByKit.text('\n DALE');
    pdfByKit.pipe(fs.createWriteStream('output12.pdf'));
    pdfByKit.pipe(res);
    pdfByKit.end();
  })

module.exports = router;