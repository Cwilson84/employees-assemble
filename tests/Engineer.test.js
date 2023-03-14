const Engineer = require ('../lib/Engineer');

describe('Engineer', () => {
    it ('should create an engineer object', () => {
        const employee = new Engineer ();
        expect (typeof employee).toBe('object');
    });
    
    it ('should add a gitHub username to the engineer object', () => {
        const gitHub = 'logi03';
        const employee = new Engineer ('Logan', 2, 'Logan@gmail.com', gitHub);
        expect (employee.gitHub).toBe('logi03');
    });
    
    it ('should set the role to engineer with getRole()', () => {
            const role = 'Engineer';
            const employeeInstance = new Engineer ('Logan', 2, 'Logi@gmail.com', 'logi03', role);
            expect (employeeInstance.getRole()).toBe(role);
        });
});

describe('Engineer', () => {
    it ('should retrieve gitHub username using getGitHub() method', () => {
        const testGitHub = 'logi03';
        const employee = new Engineer ('Logan', 2, 'Logan@gmail.com', testGitHub);
        expect (employee.getGitHub()).toBe(testGitHub);
    });
});