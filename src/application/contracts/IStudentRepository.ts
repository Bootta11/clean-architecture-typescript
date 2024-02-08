import Student from '../../entities/Student.js';

export default interface IStudentRepository {
    add(_studentInstance): Promise<Student>;
    update(_studentInstance): Promise<unknown>;
    delete(_studentInstance): Promise<unknown>;
    getById(_StudentId): Promise<unknown>;
    getByEmail(_StudentId): Promise<unknown>;
    getAll(): Promise<unknown>;
    addEnrollment(_studentInstance, _enrollment): Promise<unknown>;
}
