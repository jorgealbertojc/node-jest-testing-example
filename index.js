const express = require( 'express' );

const indexRouter = express.Router();

indexRouter.get( '/endpoint', ( _, res ) => {

    res.status( 200 ).json( { module: true } )
} );

module.exports = indexRouter;
