const user = require("../models/user")
const {setUser} = require("../service/auth")
const jwt = require( "jsonwebtoken" )

async function handleLoginGetRequest ( req, res )
{
    return res.status( 200 ).render( "login" );
}
async function handleLoginPostRequest ( req, res )
{
    const { email, password } = req.body;
    const requser = await user.findOne( { email } );
    if ( !requser )
        return res.status( 404 ).send( "No user found" );
    if ( requser.password === password )
    {
        const token=setUser( requser );
        res.cookie( "uid", token );
        return res.status( 200 ).redirect("/database");
    }
    else
        return res.status( 400 ).send( "Wrong Password" );
}

module.exports = {
    handleLoginGetRequest,
    handleLoginPostRequest,
}