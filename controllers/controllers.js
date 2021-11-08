

const Card = require('../models/Card')
const express = require('express')
const mongoose = require('mongoose')

const router = express.Router();

const getCards = async (req, res) => {
    try {
        const cards = await Card.find();

        res.status(200).json(cards);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getCard = async (req, res) => {
    const { id } = req.params;

    try {
        const card = await Card.findById(id);

        res.status(200).json(card);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createCard = async (req, res) => {
    const { title, tasks } = req.body;
    const newCard = new Card({ title, tasks })

    try {
        await newCard.save();

        res.status(201).json(newCard);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const updateCard = async (req, res) => {

    const { title, tasks } = req.body;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No card with id: ${id}`);

    const updatedCard = { title, tasks, _id: id };

    await Card.findByIdAndUpdate(id, updatedCard, { new: true });

    res.json(updatedCard);
}

const deleteCard = async (req, res) => {

    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No card with id: ${id}`);

    await Card.findByIdAndRemove(id);

    res.json({ message: "Card deleted successfully." });
}


module.exports = { getCards, getCard, createCard, updateCard, deleteCard, router }