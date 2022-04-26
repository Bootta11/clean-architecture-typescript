import IDatabaseServices from '../../../application/contracts/IDatabaseServices';
import InMemoryStudentRepository from './InMemoryStudentRepository';
import Student from '../../../entities/Student';

export default class InMemoryDatabaseServices implements IDatabaseServices {
    private studentRepository: InMemoryStudentRepository;

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
};
