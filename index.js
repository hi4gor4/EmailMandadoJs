const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const rotas = require('./rotas');
app.use('/api', rotas);












const port = 3001;

app.listen(port, () =>  {
    console.log('server running on http://localhost:' , port);
} );

app.use(express.static(__dirname + '/client'))

