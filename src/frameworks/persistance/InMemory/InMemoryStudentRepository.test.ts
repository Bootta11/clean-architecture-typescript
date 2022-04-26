import InMemoryStudentRepository from "./InMemoryStudentRepository";
import Student from "../../../entities/Student";

const studentRepository = new InMemoryStudentRepository()

test('add student', async () => {
    let student = new Student('fn', 'ln', 'e@mail.com', [])
    let got = await studentRepository.add(student)

    expect(got).toEqual(student)
})

test('update student', async () => {
    let student = new Student('fn', 'ln', 'e@mail.com', [])
    await studentRepository.add(student)
    student.firstName = 'updated_fn'
    let got = await studentRepository.update(student)

    expect(got).toEqual(student)
})

test('delete student', async () => {
    let student = new Student('fn', 'ln', 'e@mail.com', [])
    let addedStudent = await studentRepository.add(student)

    let got = await studentRepository.delete(addedStudent.id)

    expect(got).toEqual(true)
})
