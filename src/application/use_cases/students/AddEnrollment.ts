/* eslint-disable arrow-body-style */
import {IUseCase} from '../IUseCase.js';
import IStudentRepository from '../../contracts/IStudentRepository.js';
import Enrollment from '../../../entities/Enrollment.js';

interface AddEnrollmentRequest {
    studentId: number,
    enrollment: string
}

export default class AddEnrollmentUseCase implements IUseCase<AddEnrollmentRequest, Enrollment>{
    private studentRepository: IStudentRepository;

    constructor(studentRepository: IStudentRepository) {
        this.studentRepository = studentRepository;
    }

    async execute(request?: AddEnrollmentRequest): Promise<Enrollment> {
        const student = await this.studentRepository.getById(request?.studentId);

        if (!student || !request?.enrollment) {
            throw new Error('validation failed');
        }

        // can add validation with joi

        return this.studentRepository.addEnrollment(request?.studentId, request?.enrollment);
    }
}
