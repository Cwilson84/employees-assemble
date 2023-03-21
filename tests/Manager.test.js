const Manager = require ('../libs/Manager');

describe('Manager', () => {
    it ('should create a manager object', () => {
        const employee = new Manager ();
        expect (typeof employee).toBe('object');
    });
   
    it ('should add an office number to the manager object', () => {
        const officeNumber = 12;
        const employee = new Manager ('Logan', 3, 'logi@gmail.com', officeNumber);
        expect (employee.officeNumber).toBe(12);
    });
   
    it ('should add a role to the manager object', () => {
            const role = 'Manager';
            const employeeInstance = new Manager ('Logan', 3, 'logi@gmail.com', 4, role);
            expect (employeeInstance.getRole()).toBe(role);
        });
});

describe('Manager', () => {
    it ('should retrieve office number using getOfficeNumber() method', () => {
        const testOfficeNumber = 3;
        const employee = new Manager ('Logan', 3, 'logi@gmail.com', testOfficeNumber);
        expect (employee.getOfficeNumber()).toBe(testOfficeNumber);
    });
});