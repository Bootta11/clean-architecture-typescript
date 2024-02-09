import InMemoryStudentRepository from './InMemoryStudentRepository.js';
import Student from '../../../entities/Student.js';
import IProjectDependency from '../../../application/contracts/IProjectDependency.js';

export default class InMemoryDatabaseServices implements IProjectDependency {
    public studentRepository: InMemoryStudentRepository;

    constructor() {
        this.studentRepository = new InMemoryStudentRepository();
    }

    async init() {
        this.seedData();
    }

    async seedData() {
        let sampleStudent = new Student('royi', 'benita', 'royibeni@gmail.com', []);

        sampleStudent = await this.studentRepository.add(sampleStudent);
        await this.studentRepository.addEnrollment(sampleStudent.id, { course: { id: 1, name: 'math' }, grade: 95 });

    }
}
