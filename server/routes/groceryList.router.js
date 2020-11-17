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

router.post('/addItem', (req, res, next) => {
    const user_id = req.body.user_id;
    const item = req.body.item;
    const quantity = req.body.quantity;
    const shopped = req.body.shopped;
  // update this depending on what your groceries table looks like
    const queryText = `INSERT INTO "groceries" (user_id, item, quantity, shopped)
      VALUES ($1, $2, $3, $4)`;
    pool
      .query(queryText, [user_id, item, quantity, shopped])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('User registration failed: ', err);
        res.sendStatus(500);
      });
  });

module.exports = router;