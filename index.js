const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/dale', (req, res)=>{
    res.send('funcionando')
})

const rotas = require('./rotas');
app.use('/api', rotas);


const port = 3001;
app.listen(port, () =>  {
    console.log('server running on http://localhost:' , port);
} );

