import express from 'express';

import { userSubmit } from '../Controller/user-controller.js';

const router=express.Router();

router.post('/signup',userSubmit);

export default router;