import Student from '../../../entities/Student.js';
import IDatabaseServices from '../../../application/contracts/IDatabaseServices.js';
import IStudentRepository from '../../../application/contracts/IStudentRepository.js';

export default class InMemoryDatabaseServices implements IDatabaseServices {
    public studentRepository: IStudentRepository;

    constructor(inMemoryStudentRepository: IStudentRepository) {
        this.studentRepository = inMemoryStudentRepository;
    }

    async init() {
        // this.seedData();
    }

    async seedData() {
        let sampleStudent = new Student('royi', 'benita', 'royibeni@gmail.com', []);

        sampleStudent = await this.studentRepository.add(sampleStudent);
        await this.studentRepository.addEnrollment(sampleStudent.id, { course: { id: 1, name: 'math' }, grade: 95 });

    }
}
