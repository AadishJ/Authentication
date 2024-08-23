const user = require("../models/user")
async function handleSignUpGetRequest ( req, res )
{
    return res.status( 200 ).render( "signup" );
}

async function handleSignUpPostRequest ( req, res )
{
    const { email, password } = req.body;
    await user.create( {
        email,
        password,
    } )
        .then( () => res.status( 200 ).redirect( "/login" ) )
        .catch( ( err ) => res.status(400).send( err.message ) );
}

module.exports =
{
    handleSignUpGetRequest,
    handleSignUpPostRequest,
}