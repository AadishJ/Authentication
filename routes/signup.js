const express = require( "express" );
const router = express.Router();
const {handleSignUpGetRequest,handleSignUpPostRequest} = require("../controllers/signup")
router
    .route( "/" )
    .get( ( req, res ) => handleSignUpGetRequest( req, res ) )
    .post( ( req, res ) => handleSignUpPostRequest( req,res ) );

module.exports = router;
