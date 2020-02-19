const express = require('express');
const router = require('express').Router();

router.use('/', require('./postagens'));

router.use('/', require('./comentarios'));
router.use('/', require("./relatorio"));

module.exports = router;


