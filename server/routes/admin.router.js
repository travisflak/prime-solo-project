const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

/** these are templates for GET and POST routes
 * GET route template
 */
//get route querying all data from user table
router.get('/',rejectUnauthenticated, (req, res) => {
    console.log('GET', req.user.id);
    
    const queryText = `SELECT "username" FROM "user"`;
  
    pool
      .query(queryText)
      .then((result) => res.send(result.rows))
      .catch((err) => {
          console.log('User registration failed: ', err);
          res.sendStatus(500);
    });
  })

// /**
//  * POST route template
//  */
// router.post('/', (req, res) => {
//   // POST route code here
// });

router.delete ('/:id',rejectUnauthenticated, (req, res) => {
    console.log('In delete router', req.params.id);
    
    const queryText = `DELETE FROM "user" WHERE  "username" = $1;`;
pool
  .query(queryText, [req.params.id])
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('User registration failed: ', err);
    res.sendStatus(500);
  });
});

module.exports = router;