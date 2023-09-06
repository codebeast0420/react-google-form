import express,{Router} from 'express'
import * as form from '../Controllers/formController.mjs'


const router = express.Router()


router.post("/submitForm", form.createForm);


export default router;