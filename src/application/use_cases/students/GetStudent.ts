import {IUseCase} from '../IUseCase.js';
import IStudentRepository from '../../contracts/IStudentRepository.js';

export interface GetStudentRequest {
    studentId: number,
}

export default class GetStudentUseCase implements IUseCase<GetStudentRequest, unknown> {
    private studentRepository: IStudentRepository;

    constructor(studentRepository: IStudentRepository) {
        this.studentRepository = studentRepository;
    }

    execute(request?: unknown): unknown {
        return this.studentRepository.getById(request.studentId);
    }
}
