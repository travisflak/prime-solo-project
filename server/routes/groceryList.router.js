const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//get route querying all data from groceries table
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "groceries" WHERE "user_id" = $1`;

  pool
    .query(queryText, [req.user.id])
    .then((response) => res.send(response.rows))
    .catch((err) => {
        console.log('User registration failed: ', err);
        res.sendStatus(500);
});
})

router.post('/addItem', (req, res, next) => {
    const user_id = req.user.id;
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