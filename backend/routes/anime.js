const express = require('express');
const router = express.Router();
const animeController = require('../controllers/anime')
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth')

router.post('/', multer, animeController.createAnime);
router.get('/', animeController.getAllAnimes);
router.get('/:id', animeController.getOneAnime);
router.put('/:id', multer, animeController.modifyOneAnime);

module.exports = router;