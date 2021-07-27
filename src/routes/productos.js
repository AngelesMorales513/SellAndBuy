const express = require('express');
const router = express.Router();
const {isLoggedIn, isNotLoggedIn} = require('../lib/auth');
const pool = require('../database');

router.get('/publicarProd', isLoggedIn, (req, res) => {
    req.flash('success', 'Producto publicado correctamente');
    res.render('productos/publicarProd');
});
router.post ('publicarProd',async), (req, res) =>{
    const { CantidadStock, DescripProducto, PrecioProducto} = req.body;
    const Produc = {
        CantidadStock,
        DescripProducto,
        PrecioProducto
    };
     await pool.query('INSERT INTO Producto set ?, {Produc} ');
    res.send('recivido');
}

router.get('/consultProdu', async, isLoggedIn, (req, res) => {
    const Consulta = await pool.query('SELECT * FROM Producto' );
    res.render('productos/consultProdu',{Consulta});
    
});

module.exports = router;
