const mongoose = require( "mongoose" );

const userSchema = mongoose.Schema( {
    Name: {
        type: String,
        required: true,
    },
    Gender: {
        type: String,
        required: true,
    },
    CreatedBy:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
},{timestamps :true} )

const userDB = mongoose.model( "UserDB", userSchema );

module.exports = userDB;