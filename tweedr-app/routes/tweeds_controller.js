const express = require('express');
const router = express.Router();
const Tweed = require('../models').tweed;

// INDEX route
router.get('/', (req, res) => {
  Tweed.findAll()
    .then((tweeds) => {
      res.status(200).render('tweeds/index', {
        tweeds
      });
    })
    .catch(err => res.status(404).json(err));
});

// NEW route
router.get('/new', (req, res) => {
  res.status(200).render('tweeds/new');
})

router.post('/', (req, res) => {
  Tweed.create(req.body)
    .then((tweed) => {
      res.status(302).redirect('/tweeds');
    })
    .catch(err => res.status(404).json(err));
})

// SHOW route
router.get('/:id', (req, res) => {
  Tweed.findById(req.params.id)
    .then((tweed) => {
      res.status(200).render('tweeds/show', {
        tweed
      });
    })
    .catch(err => res.status(404).json(err));
});

// EDIT route
router.get('/:id/edit', (req, res) => {
  Tweed.findById(req.params.id)
    .then((tweed) => {
      res.status(200).render('tweeds/edit', {
        tweed
      });
    })
    .catch(err => res.status(404).json(err));
});

// UPDATE route
router.put('/:id', (req, res) => {
  Tweed.findById(req.params.id)
    .then((tweed) => {
      return tweed.update(req.body);
    })
    .then((updatedTweed) => {
      res.status(302).redirect(`/tweeds/${req.params.id}`);
    })
    .catch(err => res.status(404).json(err));
});

// DELETE route
router.delete('/:id', (req, res) => {
  Tweed.findById(req.params.id)
    .then((tweed) => {
      return tweed.destroy();
    })
    .then(() => {
      res.status(200).redirect('/tweeds');
    })
    .catch(err => res.status(404).json(err));
});


module.exports = router;
