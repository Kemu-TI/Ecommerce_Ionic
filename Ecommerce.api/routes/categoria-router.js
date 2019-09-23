'use strict'

const express = require ('express');
const router = express.Router();
const controller = require('../controllers/categoria-controllers');

let _crtl = new controller();

router.get('/', _crtl.get);
router.get('/:id', _crtl.getByid);
router.post('/', _crtl.post);
router.put('/:id', _crtl.put);
router.delete('/:id', _crtl.delete);

module.exports = router;