import GetStudentUseCase from './GetStudent.js';
import Student from '../../../entities/Student.js';
import InMemoryStudentRepository from '../../../frameworks/persistance/InMemory/InMemoryStudentRepository.js';

jest.mock('../../../frameworks/persistance/InMemory/InMemoryStudentRepository');

test('GetStudentUseCase', async () => {
    const studentRepositoryMock = new InMemoryStudentRepository();
    studentRepositoryMock.getById = (studentId): Promise<unknown> => {
        return Promise.resolve(new Student(
            `student${studentId}_firstname`,
            `student${studentId}_lastname`,
            `student${studentId}@email.com`,
            []));
    };

    const requestStudentId = 2;

    const useCase = new GetStudentUseCase(studentRepositoryMock);

    const got = await useCase.execute({
        studentId: requestStudentId
    });

    const want = new Student(
        `student${requestStudentId}_firstname`,
        `student${requestStudentId}_lastname`,
        `student${requestStudentId}@email.com`,
        []
    );

    expect(got).toEqual(want);
});
