const express = require('express');
const router = new express.Router();

/* GET home page. */
const courses = [
  {
    title: 'Physique',
    teacher: 'Isaac NEWTON',
  },
  {
    title: 'Physique quantique',
    teacher: 'Albert EINSTEIN',
  },
  {
    title: 'Chimie',
    teacher: 'Antoine LAVOISIER',
  },
  {
    title: 'Anatomie',
    teacher: 'André VESALE',
  },
  {
    title: 'Philosophie',
    teacher: 'René DESCARTES',
  },
];

router.get('/courses', (req, res, next) => {
  res.json(courses);
});

module.exports = router;
