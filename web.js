/*
 * web.js - hello world
*/

/*jslint        node   : true, continue : true,
 devel  : true, indent : 2,    maxerr   : 50,
 newcap : true, nomen  : true, plusplus : true,
 regexp : true, sloppy : true, vars     : false,
 white  : true
*/

/*global */

var
 express 	= require( 'express' ),
 app 		= express(),
 http 		= require( 'http' ),
 logfmt		= require( 'logfmt' );
 server 	= http.createServer( app );

app.use( logfmt.requestLogger() );

app.get( '/', function ( req, res ) {
	res.header( 'Content-Type', 'text/html' );
	res.end( '<h1>Hello world !</h1>' );
});

server.listen(3000, function () {
	console.log( 'Connected on %d', server.address().port );
});