const express = require('express');
const router = express.Router();
const fs = require("fs");
const pdf = require("html-pdf");

var conteudo = `
<!DOCTYPE html>
<!-- saved from url=(0053)http://twitter.github.io/bootstrap/examples/hero.html -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <title>GAC</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="{{STATIC_URL}}css/bootstrap.css" rel="stylesheet">
    <style type="text/css">
      body {
        padding-top: 60px;
        padding-bottom: 40px;
      }
    </style>
    <link href="{{STATIC_URL}}css/bootstrap-responsive.css" rel="stylesheet">

    <!-- Fav and touch icons -->
    <link rel="shortcut icon" href="{{STATIC_URL}}img/favicon.ico">

  </head>

  <body>

    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="brand" href="#">GAC</a>
          <div class="nav-collapse collapse">
            <ul class="nav">
              <li><a href="/">Inicio</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>

    <div class="tabbable tabs-left" style="padding-left:50px;">
      <ul class="nav nav-tabs">
        <li onClick="location.href = '/cliente/info_clientes';">
          <a href="/cliente/info_clientes" data-toggle="tab">Clientes</a>
        </li>
        <li onClick="location.href = '/servicos/';">
          <a href="/servicos/" data-toggle="tab">Serviços</a>
        </li>
        <li onClick="location.href = '/portfolio_admin/';">
          <a href="/portfolio_admin/" data-toggle="tab">Portfólio</a>
        </li>
        <li class="active" onClick="location.href = '/relatorio/';">
          <a href="/relatorio/" data-toggle="tab">Relatório</a>
        </li>
      </ul>
      <!-- Example row of columns -->
      <div class="tab-content" style="padding-right:50px;">
        <h2>Relatório de Visitações</h2>
        <h5>Defina o período de tempo que deve ser considerado para a geração do relatório</h5>
        <form method="post" action="">
         {% csrf_token %}
          <div style="float:left;">
            <div>
              <label for="inputPrazo">Data Inicial:</label>
            </div>
            <div> 
              <div name="dataInicio" class="input-append date" id="inputDataInicio" data-date="" data-date-format="dd/mm/yyyy">
                {{form.dataInicio}}
                <span class="add-on"><i class="icon-calendar"></i></span>
              </div>
              
            </div>
          </div>
          <div style="float:left;margin-left:40px;">
            <div>
              <label for="inputPrazo">Data Final</label>
            </div>
            <div> 
              <div class="input-append date" id="inputDataFim" data-date="" data-date-format="dd/mm/yyyy">
               {{form.dataFim}}
                <span class="add-on"><i class="icon-calendar"></i></span>
              </div>
              <div style="clear:both;"></div>

               <div style="float:left;margin-left:-300px;">
                {{form.pdf}}
               </div>
               <div style="float:left;margin-left:-200px;">Gerar PDF</div>
               <br></br>
            </div>
          </div>
          <div style="clear:both;"></div>
          <div style="float:left;">
            <button id="gerarRelatorio" type="submit" class="btn">Gerar Relatório</button>
          </div>
          
         </form>          
          <div style="clear:both;"></div>
        
        
        <div>
            <h4 align="left">Pedidos do Periodo</h4>
            <table class="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>Data de Entrega</th>
                  <th>Cliente</th>
                  <th>Valor Cobrado</th>
                  <th>Valor Gasto</th>
                </tr>
              </thead>
              <tbody>
                {% for pedido in pedidosList %}
                  <tr>
                    <td>{{ pedido.dataEntrega }}</td>
                    <td>{{ pedido.cliente.nome }}</td>
                    <td>R$ {{ pedido.valorCobrado }}</td>
                    <td>R$ {{ pedido.valorGasto }}</td>
                  </tr>
                {% endfor %}
              </tbody>
            </table>
          </div> <!--Fim da Tabela de Pedidos em Aberto-->

          
            <div style="float:right;"> 
            <table class="table table-striped table-bordered table-hover">
              <thead>
                <tr>            
                <th>Lucro:</th>
                <td>R$ {{lucroPedidosTotal}}</td>
                </tr>
                <tr>
                <th>Despesas</th>
                <td>R$ {{depesaPedidosTotal}}</td>
                </tr>
                <tr>
                <th>Subtotal-Pedidos:</th>
                <td>R$ {{SubtotalPedidos}}</td>
                </tr>
              </thead>
              
            </table>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <h4 align="left">Produtos Vendidos</h4>
            <table class="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>Data de Venda</th>
                  <th>Cliente</th>
                  <th>Valor Cobrado</th>
                  <th>Valor Gasto</th>
                </tr>
              </thead>
              <tbody>        

                  {% for product in produtoList %}
                  
                      {% if product.cliente %}
                      <tr>
                      <td>{{product.dataVenda.day}}/{{product.dataVenda.month}}/{{product.dataVenda.year}}</td>
                      <td>{{product.cliente.nome}}</td>
                      <td>R$ {{ product.valorCobrado }}</td>
                      <td>R$ {{product.valorGasto}}</td>
                      </tr>                  
                      {% endif %}                  
                  {% endfor %}
                
              </tbody>
            </table>
          </div> <!--Fim da Tabela de Produtos Vendidos-->
          <div style="float:right;"> 
            <table class="table table-striped table-bordered table-hover">
              <thead>
                <tr>            
                <th>Lucro:</th>
                <td>R$ {{lucroProdutosTotal}}</td>
                </tr>
                <tr>
                <th>Despesas</th>
                <td>R$ {{despesaProdutoTotal}}</td>
                </tr>
                <tr>
                <th>Subtotal-Produtos:</th>
                <td>R$ {{SubtotalProdutos}}</td>
                </tr>
              </thead>
              
            </table>
          </div>

    </div> <!-- /container -->
      </div>
        

    <div>
      <hr>

      <footer>
        <p>© NER²J Solutions 2013</p>
      </footer>
    </div>

    


    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="{{STATIC_URL}}js/jquery.js"></script>
    <script src="{{STATIC_URL}}js/bootstrap.js"></script>
    <script src="{{STATIC_URL}}js/bootstrap-editable.js"></script>
    <script src="{{STATIC_URL}}js/bootstrap-editable.js"></script>
    <script src="{{STATIC_URL}}js/bootstrap-datepicker.js"></script>
    <script type="text/javascript">
      $(function() {
    $('#inputDataInicio').datepicker({
      language: 'pt-BR'
    });
  });
    </script>
    <script type="text/javascript">
      $(function() {
      $('#inputDataFim').datepicker({
        language: 'pt-BR'
       });
    });
    </script>
    </body></html>
`

router.get('/relatorio/:nome', (req,res)=>{
    var x = './'+req.params.nome+'.pdf'
    pdf.create(conteudo, {})
    .toFile(x,(err, res)=>{
        if(err){
            console.log("Deu ruim")
        }else{
            console.log("Deu bom!") 
        }
    })
})

router.get("/pdf/:nome", (req, res) => {
    var x = './'+req.params.nome+'.pdf'
    var file = fs.createReadStream(x);
    file.pipe(res);
  });


module.exports = router;