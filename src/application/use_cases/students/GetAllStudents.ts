import Student from '../../../entities/Student.js';
import IStudentRepository from '../../contracts/IStudentRepository.js';
import {IUseCase} from '../IUseCase.js';

export default class GetAllStudentsUseCase implements IUseCase<void, Student[]>{
    private studentRepository: IStudentRepository;

    constructor(studentRepository: IStudentRepository) {
        this.studentRepository = studentRepository;
    }

    async execute(): Promise<Student[]> {
        return this.studentRepository.getAll();
    }
}
