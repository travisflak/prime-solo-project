// No changes should be required in this file

const cookieSession = require('cookie-session');
const warnings = require('../constants/warnings');

const serverSessionSecret = () => {
  if (!process.env.SERVER_SESSION_SECRET ||
      process.env.SERVER_SESSION_SECRET.length < 8 ||
      process.env.SERVER_SESSION_SECRET === warnings.exampleBadSecret) {
    // Warning if user doesn't have a good secret
    console.log(warnings.badSecret);
  }

  return process.env.SERVER_SESSION_SECRET;
};

module.exports = cookieSession({
  secret: serverSessionSecret() || 'secret', // set this in the .env file
  key: 'user', // this is the name of the req.variable. 'user' is convention, but not required
  resave: 'false',
  saveUninitialized: false,
  maxAge: 60 * 60 * 1000, // Set to 1 hour - 60 min/hour * 60 s/min * 1000 ms/s 
  secure: false
});
