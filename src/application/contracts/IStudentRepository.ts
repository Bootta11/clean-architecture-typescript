export default interface IStudentRepository {
    add(studentInstance): Promise<any>;
    update(studentInstance): Promise<any>;
    delete(studentInstance): Promise<any>;
    getById(StudentId): Promise<any>;
    getByEmail(StudentId): Promise<any>;
    getAll(): Promise<any>;
    addEnrollment(studentInstance, enrollment): Promise<any>;
};
