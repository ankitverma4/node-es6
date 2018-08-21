import { Router } from 'express';
import userRoutes from './user/user.routes';
let router = Router();

router.get( '/', ( req, res ) => {
    res.send("Welcome to our api");
})
router.use( '/users', userRoutes);

module.exports = router;