const jwt = require( "jsonwebtoken" )
const skey = "QWERTYUIOP"
function setUser (user)
{
    return jwt.sign( {
        _id:user._id,
        email: user.email,
    }
    ,skey)
}

function getUser ( token )
{
    if ( !token )
    {
        return null;
    }
    try {
        return jwt.verify( token, skey );
    } catch (error) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
};