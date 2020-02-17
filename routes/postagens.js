const express = require('express');
const router = require('express').Router();


router.get('/postagens', (req, res)=>{
    res.json({
        titulo: 'first post',
        descrição: 'dale dele dole duli',
        autor: 'hiaguinho show'
    })

})


module.exports = router