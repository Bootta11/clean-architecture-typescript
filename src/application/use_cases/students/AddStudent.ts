import {IUseCase} from "../IUseCase";
import IStudentRepository from "../../contracts/IStudentRepository";
import ICrmServices from "../../contracts/ICrmServices";
import Student from "../../../entities/Student";

export interface AddStudentRequest {
    firstName: string,
    lastName: string,
    email: string,
    enrollments: string[]
}

export default class AddStudentUseCase implements IUseCase<AddStudentRequest, any> {
    private studentRepository: IStudentRepository;
    private crmServices: ICrmServices;

    constructor(studentRepository: IStudentRepository, crmServices: ICrmServices) {
        this.studentRepository = studentRepository;
        this.crmServices = crmServices;
    }

    async execute(request?: AddStudentRequest): Promise<any> {
        const student = await this.studentRepository.getByEmail(request?.email);

        if (!request?.firstName || !request?.lastName || !request?.email) {
            throw new Error('validation failed');
        }

        if (student) {
            throw new Error('email already exist in the system');
        }

        let newStudent = new Student(request?.firstName, request?.lastName, request?.email, request?.enrollments);

        newStudent = await this.studentRepository.add(newStudent);

        await this.crmServices.notify(newStudent);

        return 'student added successfully';
    }
}