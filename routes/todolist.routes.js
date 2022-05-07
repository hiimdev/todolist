var express = require('express');
var router = express.Router();

router.get('/add', (req, res) => {
    res.render('./todolist/add');
});

router.get('/edit', (req, res) => {
    res.render('./todolist/edit');
});

router.get('/view', (req, res) => {
    res.render('./todolist/view');
});

router.get('/delete', (req, res) => {
    res.render('./todolist/delete');
});

router.get('/home', (req, res) => {
    res.render('./todolist/home');
});

module.exports = router;
