import express from 'express';
import mongoose, { mongo } from 'mongoose';
import routes from './api/index.route';

let app = express();

mongoose.connect( 'mongodb://localhost:27017/testdb', (err) => {
    if (err) {
        console.error(err);
    } else{
        console.log( "Connected with database.");
    }
});

app.use( '/api', routes);
app.use( ( req, res, next ) => {
    res.status(404).send( "API not found" );
});

app.listen(3000, () => {
    console.log( "server running" )
});