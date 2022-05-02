const Anime = require('../models/Anime');

exports.createAnime = (req, res, next) => {

    delete req.body._id;
    const anime = new Anime({
        //raccourci de : title: req.body.title....
        en_jp: req.body.en_jp,
        ja_jp: req.body.ja_jp,
        creation_date: new Date(req.body.creation_date),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        status: req.body.status,
        synopsis: req.body.synopsis,
        episode_count: parseInt(req.body.episode_count),
    });
    anime.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré ' }))
        .catch((error) => res.status(400).json({ error }))
}

exports.getAllAnimes = (req, res, next) => {
    Anime.find()
        .then(animes => res.status(200).json(animes))
        .catch(error => res.status(404).json({ error }));
}

exports.getOneAnime = (req, res, next) => {
    Anime.find({ _id: req.params.id })
        .then(anime => res.status(200).json(anime))
        .catch(error => res.status(404).json({ error }));
}