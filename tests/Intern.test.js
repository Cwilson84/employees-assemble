const Intern = require ('../libs/Intern');

describe('Intern', () => {
    it ('should create an intern object', () => {
        const employee = new Intern ();
        expect (typeof employee).toBe('object');
    });
  
    it ('should add a school to the intern object', () => {
        const school = 'University';
        const employee = new Intern ('Oliver', 3, 'ollie@gmail.com', school);
        expect (employee.school).toBe('University');
    });

    it ('should add role to the intern object with getRole()', () => {
            const role = 'Intern';
            const employeeInstance = new Intern ('Oliver', 3, 'john@gmail.com', 'University', role);
            expect (employeeInstance.getRole()).toBe(role);
        });
});


describe('Intern', () => {
    it ('should retrieve the school using getSchool() method', () => {
        const testSchool = 'University';
        const employee = new Intern ('Oliver', 3, 'ollie@gmail.com', testSchool);
        expect (employee.getSchool()).toBe(testSchool);
    });
});