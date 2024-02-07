import InMemoryStudentRepository from './InMemoryStudentRepository.js';
import Student from '../../../entities/Student.js';

const studentRepository = new InMemoryStudentRepository();

test('add student', async () => {
    const student = new Student('fn', 'ln', 'e@mail.com', []);
    const got = await studentRepository.add(student);

    expect(got).toEqual(student);
});

test('update student', async () => {
    const student = new Student('fn', 'ln', 'e@mail.com', []);
    await studentRepository.add(student);
    student.firstName = 'updated_fn';
    const got = await studentRepository.update(student);

    expect(got).toEqual(student);
});

test('delete student', async () => {
    const student = new Student('fn', 'ln', 'e@mail.com', []);
    const addedStudent = await studentRepository.add(student);

    const got = await studentRepository.delete(addedStudent.id);

    expect(got).toEqual(true);
});
