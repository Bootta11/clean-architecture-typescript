import Enrollment from '../../entities/Enrollment.js';
import Student from '../../entities/Student.js';

export default interface IStudentRepository {
    add(_studentInstance): Promise<Student>;
    update(_studentInstance): Promise<unknown>;
    delete(_studentInstance): Promise<unknown>;
    getById(_StudentId): Promise<Student>;
    getByEmail(_StudentId): Promise<Student>;
    getAll(): Promise<Student[]>;
    addEnrollment(_studentInstance, _enrollment): Promise<Enrollment>;
}
