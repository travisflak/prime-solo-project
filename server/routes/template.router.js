const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/** these are templates for GET and POST routes
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
