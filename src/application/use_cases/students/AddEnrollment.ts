/* eslint-disable arrow-body-style */
import {IUseCase} from "../IUseCase";
import IStudentRepository from "../../contracts/IStudentRepository";

module.exports = (StudentRepository) => {

    const Execute = async (studentId, enrollment) => {
        const student = await StudentRepository.getById(studentId);

        // business validation
        if (!student || !enrollment) {
            throw new Error('validation failed');
        }

        // to be implemented - check if course exist
        // check if user already has this enrollment
        if (student.enrollments.some(e => e.course.id === enrollment.course.id)) {
            throw new Error('validation failed: user already registered to this course');
        }

        // can add validation with joi

        return StudentRepository.addEnrollment(studentId, enrollment);
    };
    return {
        Execute
    };
};

interface AddEnrollmentRequest {
    studentId: number,
    enrollment: string
}

export default class AddEnrollmentUseCase implements IUseCase<AddEnrollmentRequest, any>{
    private studentRepository: IStudentRepository;

    constructor(studentRepository: IStudentRepository) {
        this.studentRepository = studentRepository;
    }

    async execute(request?: AddEnrollmentRequest): Promise<any> {
        const student = await this.studentRepository.getById(request?.studentId);

        if (!student || !request?.enrollment) {
            throw new Error('validation failed');
        }

        // can add validation with joi

        return this.studentRepository.addEnrollment(request?.studentId, request?.enrollment);
    }
}
