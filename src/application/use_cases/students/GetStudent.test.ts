import GetStudentUseCase from "./GetStudent";
import Student from "../../../entities/Student";
import InMemoryStudentRepository from "../../../frameworks/persistance/InMemory/InMemoryStudentRepository";

jest.mock("../../../frameworks/persistance/InMemory/InMemoryStudentRepository")

test("GetStudentUseCase", async () => {
    let studentRepositoryMock = new InMemoryStudentRepository()
    studentRepositoryMock.getById = (studentId): Promise<any> => {
        return Promise.resolve(new Student(
            `student${studentId}_firstname`,
            `student${studentId}_lastname`,
            `student${studentId}@email.com`,
            []))
    }

    const requestStudentId = 2;

    let useCase = new GetStudentUseCase(studentRepositoryMock)

    const got = await useCase.execute({
        studentId: requestStudentId
    })

    const want = new Student(
        `student${requestStudentId}_firstname`,
        `student${requestStudentId}_lastname`,
        `student${requestStudentId}@email.com`,
        []
    )

    expect(got).toEqual(want);
})
