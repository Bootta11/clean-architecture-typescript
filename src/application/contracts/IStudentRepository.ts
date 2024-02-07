import Student from '../../entities/Student.js';

export default interface IStudentRepository {
    add(studentInstance): Promise<Student>;
    update(studentInstance): Promise<unknown>;
    delete(studentInstance): Promise<unknown>;
    getById(StudentId): Promise<unknown>;
    getByEmail(StudentId): Promise<unknown>;
    getAll(): Promise<unknown>;
    addEnrollment(studentInstance, enrollment): Promise<unknown>;
}
