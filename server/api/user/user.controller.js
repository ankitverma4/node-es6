import { Router } from 'express';

function getUser( req, res ) {
    if( req.params['id'] ){
        res.send( "single user to be sent" );
    } else{
        res.send( "Under development" );
    }
}

module.exports = { getUser };