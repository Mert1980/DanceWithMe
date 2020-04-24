const jwt = require("jsonwebtoken"); // to validate the token being provided
const User = require("../models/user"); // to find token in database

// This middelware function is called before user logs out or is directed to profile page
// It ensures only authenticated users perform the following functions.
const auth = async (req, res, next) => {
  try {
    // Token is received from front-end along in request headet with a Bearer field inside.
    // "Bearer " field is removed by replacing it with empty string
    console.log("I am here")
    const token = req.header('Authorization').replace('Bearer ', '');
    console.log(token)
    // Token is verified by using JWT package via JWT_SECRET keyword that we created in user module.
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded)
        
    // Find a user with a correct ID who has authentication token. 
    const user = await User.findOne({_id: decoded._id, 'tokens.token': token });
    console.log(user)
    
    /* When the user logs out we will delete the auth token from the tokens
     array of the user. So if the user tries to authenticate with the same token,
     it won't work because the token was deleted from the tokens array
     by the logout function.*/

    if (!user) {
      throw new Error();
    }
    // This is used when the user logs out. 
    // We can access this in logout route handler
    req.token = token; 
    req.user = user;
    
    // Next is called to perform the following funtions defined in the route handlers
    next();
  } catch (e) {
    // If authentication is unsuccessfuls, send status code 401
    res.status(401).send({ error: "Please authenticate!" });
  }
};
module.exports = auth;