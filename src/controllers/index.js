// import { Request, Response } from 'express';
const cryptoService  = require('../services/cryptoService');

const createCrypto =  async (req, res)=> {
    try {
        const { name, price, symbol } = req.body;
        const crypto = await cryptoService.createCrypto(name, price, symbol);
        res.status(201).json(crypto);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

const getCrypto = async (req, res)=> {
    try {
        const { id } = req.params;
        const crypto = await cryptoService.getCryptoById(parseInt(id));
        if (crypto) {
            res.json(crypto);
        } else {
            res.status(404).json({ error: 'Crypto not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

const updateCrypto = async (req, res)=> {
    try {
        const { id } = req.params;
        const { name, price, symbol } = req.body;
        const crypto = await cryptoService.updateCrypto(parseInt(id), name, price, symbol);
        if (crypto) {
            res.json(crypto);
        } else {
            res.status(404).json({ error: 'Crypto not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

const deleteCrypto = async (req, res)=> {
    try {
        const { id } = req.params;
        await cryptoService.deleteCrypto(parseInt(id));
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

module .exports = {deleteCrypto,updateCrypto,createCrypto,getCrypto}