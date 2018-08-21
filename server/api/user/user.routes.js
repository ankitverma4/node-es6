import { Router } from 'express';
import * as User from './user.controller';
let router = Router();

router.route( '/')
    .get( User.getUser);

router.route( '/:id')
    .get( User.getUser);
    
module.exports = router;