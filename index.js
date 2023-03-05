


( () => {



    const router = require( `express` ).Router()



    router.get( `/pipeline`, ( _req, _res ) => {

        _res.status(200).json( { ok: true } )
    } )



    module.exports = router
} )()
