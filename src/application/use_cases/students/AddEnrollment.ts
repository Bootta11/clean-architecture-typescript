/* eslint-disable arrow-body-style */
import {IUseCase} from '../IUseCase.js';
import IStudentRepository from '../../contracts/IStudentRepository.js';

interface AddEnrollmentRequest {
    studentId: number,
    enrollment: string
}

export default class AddEnrollmentUseCase implements IUseCase<AddEnrollmentRequest, unknown>{
    private studentRepository: IStudentRepository;

    constructor(studentRepository: IStudentRepository) {
        this.studentRepository = studentRepository;
    }

    async execute(request?: AddEnrollmentRequest): Promise<unknown> {
        const student = await this.studentRepository.getById(request?.studentId);

        if (!student || !request?.enrollment) {
            throw new Error('validation failed');
        }

        // can add validation with joi

        return this.studentRepository.addEnrollment(request?.studentId, request?.enrollment);
    }
}
