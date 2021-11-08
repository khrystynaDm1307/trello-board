
const { getCards, getCard, createCard, updateCard, deleteCard } = require('../controllers/controllers')

const express = require('express')
const router = express.Router();

router.get('/', getCards);
router.post('/', createCard);
router.get('/:id', getCard);
router.patch('/:id', updateCard);
router.delete('/:id', deleteCard);

module.exports = router

