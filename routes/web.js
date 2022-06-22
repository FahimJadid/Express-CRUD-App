import express from "express";
const router = express.Router();
import StudentController from '../controllers/studentControl.js';


// define the home page route
router.get('/', StudentController.getAllDoc);
router.post('/', StudentController.createDoc);
router.get('/edit/:id', StudentController.editDoc);
router.post('/update/:id', StudentController.updateDocById);
router.post('/delete/:id', StudentController.deleteDocById);

// define the about route


export default router;