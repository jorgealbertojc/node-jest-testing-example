


const nock = require( `nock` )
const request = require( `supertest` )
const express = require( `express` )

const indexRouter = require( `./index` )

const host = `http://127.0.0.1`
const path = `/pipeline`

describe( `Index`, () => {
    test( `Testing router`, ( _done ) => {

        const app = express()
        app.use( `/`, indexRouter )

        request( app )
            .get( path )
            .expect( 200 )
            .end( _done )
    } )
} )
