const Employee = require('../lib/Employee');
const Manager = require ('../lib/Manager');

test ("can set office # via constructor argument",() =>{
    const testValue = 100;
    const staffM = new Manager ("anon", 1, "test@test.com", 100);
    expect(staffM.officeNumber).toBe(testValue)
})

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const staffM = new Manager("anon", 1, "test@test.com", 100);
    expect(staffM.getRole()).toBe(testValue);
  });

  
test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const staffM = new Manager("anon", 1, "test@test.com", testValue);
    expect(staffM.getofficeNumber()).toBe(testValue);
  });