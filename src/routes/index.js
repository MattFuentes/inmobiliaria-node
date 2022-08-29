const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { tittle: 'Soraci Propiedades'});
});

router.get('/alquiler', (req, res) => {
    res.render('alquiler.html', { tittle: 'Alquiler - Soraci'});
});

router.get('/ventas', (req, res) => {
    res.render('ventas.html', { tittle: 'Ventas - Soraci'});
});

router.get('/ficha-alquiler', (req, res) => {
    res.render('ficha-alquiler.html', { tittle: 'Alquiler Ejemplo'});
});

router.get('/ficha-venta', (req, res) => {
    res.render('ficha-venta.html', { tittle: 'Venta Ejemplo'});
});

router.get('/3-de-febrero-alquiler', (req, res) => {
    res.render('3df-alquiler.html', { tittle: 'Alquiler Temporario 3 de febrero'});
});



module.exports = router;