const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//get route querying all data from groceries table
router.get('/', (req, res) => {
  console.log('GET', req.user.id);
  
  const queryText = `SELECT * FROM "groceries" WHERE "user_id" = $1 ORDER BY "id" asc`;

  pool
    .query(queryText, [req.user.id])
    .then((response) => res.send(response.rows))
    .catch((err) => {
        console.log('User registration failed: ', err);
        res.sendStatus(500);
});
})

router.post('/', (req, res) => {
    const user_id = req.user.id;
    console.log('user id', user_id);
    
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

  router.delete ('/:id', (req, res) => {
    console.log('In delete router', req.params.id);
    
    const queryText = `DELETE FROM "groceries" WHERE  "id" = $1;`;
pool
  .query(queryText, [req.params.id])
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('User registration failed: ', err);
    res.sendStatus(500);
  });
});

router.put ('/', (req, res) => {
  console.log('In PUT router');
  let shopped = !req.body.shopped
  const queryText = `UPDATE "groceries" SET "shopped" = $3 WHERE user_id = $1 and id = $2;`;
pool
.query(queryText, [req.user.id,req.body.id, shopped])
.then(() => res.sendStatus(201))
.catch((err) => {
  console.log('Shopped refresh failed: ', err);
  res.sendStatus(500);
});
});


module.exports = router;