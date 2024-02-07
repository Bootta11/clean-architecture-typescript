export default class Student {
    public id: null;
    public firstName: any;
    public lastName: any;
    public fullName: string;
    public email: any;
    public enrollments: any;

    constructor(firstName, lastName, email, enrollments) {
        this.id = null;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
        this.email = email;
        this.enrollments = enrollments;
    }
}
