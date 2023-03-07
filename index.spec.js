const express = require( 'express' );
const nock = require( 'nock' );
const request = require( 'supertest' );

const indexRouter = require( './index' );

const expectedHost = 'http://127.0.0.1';
const expectedEndpointPath = '/endpoint';
const expectedResponseHttpStatusCode = 200;

describe( 'Example', () => {

    describe( 'Index', () => {

        test( 'should import index routes', ( _done ) => {

            const app = express();
            app.use( '/', indexRouter );

            nock( expectedHost )
                .get( expectedEndpointPath )
                .reply( expectedResponseHttpStatusCode, { module: false, test: true } );

            request( app )
                .get( expectedEndpointPath )
                .expect( expectedResponseHttpStatusCode )
                .end( ( _err, _res ) => {

                    console.log( '_err: ', _err );
                    console.log( '_res: ', _res );
                    _done( _err, _res );
                } );
        } );
    } );
} );
