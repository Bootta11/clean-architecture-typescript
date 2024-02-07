import IDatabaseServices from '../../../application/contracts/IDatabaseServices.js';
import InMemoryStudentRepository from './InMemoryStudentRepository.js';
import Student from '../../../entities/Student.js';

export default class InMemoryDatabaseServices implements IDatabaseServices {
    public studentRepository: InMemoryStudentRepository;

    constructor() {
        this.studentRepository = new InMemoryStudentRepository();
    }

    async initDatabase() {
        this.seedData();
    }

    async seedData() {
        let sampleStudent = new Student('royi', 'benita', 'royibeni@gmail.com', []);

        sampleStudent = await this.studentRepository.add(sampleStudent);
        await this.studentRepository.addEnrollment(sampleStudent.id, { course: { id: 1, name: 'math' }, grade: 95 });

    }
}
