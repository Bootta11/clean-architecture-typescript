export default class Student {
    public id: null;
    public firstName: unknown;
    public lastName: unknown;
    public fullName: string;
    public email: unknown;
    public enrollments: unknown;

    constructor(firstName, lastName, email, enrollments) {
        this.id = null;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
        this.email = email;
        this.enrollments = enrollments;
    }
}
