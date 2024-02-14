import {IUseCase} from '../IUseCase.js';
import IStudentRepository from '../../contracts/IStudentRepository.js';
import Student from '../../../entities/Student.js';

export interface GetStudentRequest {
    studentId: number,
}

export default class GetStudentUseCase implements IUseCase<GetStudentRequest, Student> {
    private studentRepository: IStudentRepository;

    constructor(studentRepository: IStudentRepository) {
        this.studentRepository = studentRepository;
    }

    async execute(request?: GetStudentRequest): Promise<Student> {
        return this.studentRepository.getById(request.studentId);
    }
}
