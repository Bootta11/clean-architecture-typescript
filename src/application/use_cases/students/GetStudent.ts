import {IUseCase} from "../IUseCase";
import IStudentRepository from "../../contracts/StudentRepository";

export interface GetStudentRequest {
    studentId: number,
}

export default class GetStudentUseCase implements IUseCase<GetStudentRequest, any> {
    private studentRepository: IStudentRepository;

    constructor(studentRepository: IStudentRepository) {
        this.studentRepository = studentRepository
    }

    execute(request?: any): any {
        return this.studentRepository.getById(request.studentId);
    }
}
