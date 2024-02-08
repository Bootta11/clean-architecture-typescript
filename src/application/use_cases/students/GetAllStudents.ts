import IStudentRepository from '../../contracts/IStudentRepository.js';
import {IUseCase} from '../IUseCase.js';

export default class GetAllStudentsUseCase implements IUseCase<unknown, unknown>{
    private studentRepository: IStudentRepository;

    constructor(studentRepository: IStudentRepository) {
        this.studentRepository = studentRepository;
    }

    async execute() {
        return this.studentRepository.getAll();
    }
}
