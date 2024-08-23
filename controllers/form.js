const userDB = require( "../models/userDB" );

async function handleGetRequest ( req, res )
{
    res.status( 200 ).render( "form" );
}
async function handlePostRequest ( req, res )
{
    const { name, gender } = req.body;
    await userDB.create( {
        Name: name,
        Gender: gender,
        CreatedBy: req.user._id,
    } )
        .then( () => res.status( 200 ).redirect( "/database" ) )
        .catch( ( err ) => res.status( 400 ).send(err.message ) );
}
async function handleResultGetRequest ( req, res )
{
    if ( !req.user ) 
        return res.redirect("/login")
    const data = await userDB.find( {CreatedBy: req.user._id} );
    res.status( 200 ).render( "result", {
        data,
    } );
}
module.exports = {
    handleGetRequest,
    handlePostRequest,
    handleResultGetRequest,
}