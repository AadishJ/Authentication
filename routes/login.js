const express = require( "express" );
const router = express.Router();
const {handleLoginGetRequest,handleLoginPostRequest} = require("../controllers/login")

router
    .route( "/" )
    .get( ( req, res ) => handleLoginGetRequest( req, res ) )
    .post( ( req, res ) => handleLoginPostRequest( req,res ) );


module.exports = router;
