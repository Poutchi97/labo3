const mongoose = require('mongoose');

const animeSchema = mongoose.Schema({
    en_jp: { type: String, required: true },
    ja_jp: { type: String, required: false },
    creation_date: { type: Date, required: true },
    imageUrl: { type: String, required: true },
    status: { type: String, required: true },
    synopsis: { type: String, required: true },
    episode_count: { type: Number, required: true },
});

module.exports = mongoose.model('Anime', animeSchema)