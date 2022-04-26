import AddStudent from '../../application/use_cases/students/AddStudent';
import {AddStudentRequest} from '../../application/use_cases/students/AddStudent';
import GetAllStudents from '../../application/use_cases/students/GetAllStudents';
import GetStudent from '../../application/use_cases/students/GetStudent';
import AddEnrollment from '../../application/use_cases/students/AddEnrollment';
import InMemoryStudentRepository from "../../frameworks/persistance/InMemory/InMemoryStudentRepository";

export default class StudentController {
    private studentRepository: InMemoryStudentRepository;
    private crmService: any;

    constructor(dependencies) {
        this.studentRepository = dependencies.DatabaseService;
        this.crmService = dependencies.CrmServices;
    }

    addNewStudent(req, res, next) {
        const AddStudentCommand = new AddStudent(this.studentRepository, this.crmService);

        AddStudentCommand.execute(req as AddStudentRequest).then((response) => {
            res.json(response);
        }, (err) => {
            next(err);
        });
    };

    getAllStudents(req, res, next) {
        const GetAllStudentsQuery = new GetAllStudents(this.studentRepository);

        GetAllStudentsQuery.execute().then((students) => {
            res.json(students);
        }, (err) => {
            next(err);
        });
    };

    getStudent(req, res, next) {
        const GetStudentQuery = new GetStudent(this.studentRepository);

        GetStudentQuery.execute(req.params.studentId).then((student) => {
            res.json(student);
        }, (err) => {
            next(err);
        });
    };

    addEnrollment (req, res, next) {
        const AddEnrollmentCommand = new AddEnrollment(this.studentRepository);

        AddEnrollmentCommand.execute({
            studentId: req.params.studentId,
            enrollment: req.body.enrollment
        }).then((response) => {
            res.json(response);
        }, (err) => {
            next(err);
        });
    };
};
