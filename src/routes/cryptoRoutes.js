const express = require('express')
// import { createCrypto, getCrypto, updateCrypto, deleteCrypto } from '../controllers/index';
const controllers = require('../controllers/index')

const router = express.Router();

router.post('/crypto', controllers.createCrypto);
router.get('/crypto/:id', controllers.getCrypto);
router.put('/crypto/:id', controllers.updateCrypto);
router.delete('/crypto/:id', controllers.deleteCrypto);

module.exports = router



// Transaction  API, As this route is always doing its work i put it here
// so he wont feel lonely.
router.post('/crypto/transaction', controllers.transactionCrypto)
