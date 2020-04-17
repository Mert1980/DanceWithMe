const jwt = require("jsonwebtoken"); // to validate the token being provided
const User = require("../models/user"); // to find token in database

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
    // find a user with a correct ID who has authentication token. 
    const user = await User.findOne({_id: decoded._id, 'tokens.token': token });
    
    /* When the user logs out we will delete the auth token from the tokens
     array of the user. So if the user tries to authenticate with the same token,
     it won't work because the token was deleted from the tokens array
     by the logout function.*/

    if (!user) {
      throw new Error();
    }
    req.token = token; // this will be used when the user logs out. We can access this in logout route handler
    req.user = user;
    console.log(req.user.location)
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate!" });
  }
};
module.exports = auth;