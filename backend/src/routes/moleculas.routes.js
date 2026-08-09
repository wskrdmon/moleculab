const express = require('express');
const router = express.Router();
const { getMoleculas } = require('../controllers/moleculas.controller');

router.get('/', getMoleculas);

module.exports = router;