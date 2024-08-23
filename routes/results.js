const express = require( "express" );
const { handleResultGetRequest } = require( "../controllers/form" )
const router = express.Router();

router
    .route( "/" )
    .get( ( req, res ) => handleResultGetRequest( req, res ) ); 

module.exports = router;