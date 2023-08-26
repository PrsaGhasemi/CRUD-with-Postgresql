const express = require('express')
// import { createCrypto, getCrypto, updateCrypto, deleteCrypto } from '../controllers/index';
const controllers = require('../controllers/index')
const router = express.Router();

router.post('/crypto', controllers.createCrypto);
router.get('/crypto/:id', controllers.getCrypto);
router.put('/crypto/:id', controllers.updateCrypto);
router.delete('/crypto/:id', controllers.deleteCrypto);

module.exports = router