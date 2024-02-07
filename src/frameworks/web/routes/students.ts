import express from 'express';
import StudentController from '../../../controllers/students/StudentController.js';

const studentsRouter = (dependencies) => {
    const router = express.Router();

    const controller = new StudentController(dependencies);

    router.route('/')
        .get(controller.getAllStudents)
        .post(controller.addNewStudent);

    router.route('/:studentId')
        .get(controller.getStudent);

    router.route('/enrollment/:studentId')
        .post(controller.addEnrollment);

    return router;
};


export default studentsRouter;
