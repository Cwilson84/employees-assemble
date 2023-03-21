const Employee = require('../libs/Employee');

describe('Employee', () => {
    it ('should create an employee object', () => {
        const employee = new Employee ();
        expect (typeof employee).toBe('object');
    });

    it ('should add a name to the employee object', () => {
        const name = 'Oliver';
        const employee = new Employee (name);
        expect (employee.name).toBe('Oliver');
    });

    it ('should add an id to the employee object', () => {
        const id = 1;
        const employee = new Employee ('Oliver', id);
        expect (employee.id).toBe(1);
    });

    it ('should add an email to the employee object', () => {
        const email = 'Oliver@gmail.com';
        const employee = new Employee ('Oliver', 1, email);
        expect (employee.email).toBe('Oliver@gmail.com');
    });

    it ('should add a role to the employee object', () => {
        const role = 'Employee';
        const employeeInstance = new Employee ('Oliver', 1, 'Oliver@gmail.com', role);
        expect (employeeInstance.getRole()).toBe(role);
    });
});

describe('Employee', () => {
    it ('should get the name with getName() method', () => {
        const testName = 'Oliver';
        const employee = new Employee (testName);
        expect (employee.getName()).toBe(testName);
    });

    it ('should get the id with getId() method', () => {
        const testId = 1;
        const employee = new Employee ('Logan', testId);
        expect (employee.getId()).toBe(testId);
    });

    it ('should get the email with getEmail() method', () => {
        const testEmail = 'Oliver@gmail.com';
        const employee = new Employee ('Oliver', 1, testEmail);
        expect (employee.getEmail()).toBe(testEmail);
    });
});