const express = require( "express" );
const app = express();
const DBRouter = require( "./routes/form" );
const signupRouter = require("./routes/signup")
const loginRouter = require( "./routes/login" )
const resultsRouter = require("./routes/results")
const connectMongoDB = require( './config/connect' );
const {restrictToLoggedInUserOnly,checkAuth} = require("./middlewares/auth");
const cookieParser = require( "cookie-parser" );
const PORT = 3000;
//connection
connectMongoDB( "mongodb://localhost:27017/form" ).then( () => console.log( "MongoDB connected" ) )
//middlewares
app.use( express.urlencoded( { extended: false } ) );
app.use( cookieParser() );
//EJS setup
app.set( "view engine", "ejs" )
app.set( "views", "./views" );
//Router setup
app.get( "/", ( req, res ) => res.redirect( "/signup" ) );
app.use("/results",checkAuth, resultsRouter)
app.use( "/database",restrictToLoggedInUserOnly, DBRouter );
app.use("/login", loginRouter)
app.use( "/signup", signupRouter )
//Server Start
app.listen( PORT, () => console.log( "Server started" ) );