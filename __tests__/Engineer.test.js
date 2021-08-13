const Engineer = require('../lib/Engineer')
const Employee = require('../lib/Employee')


test("can set github via getGithub ()", () => {
    const testValue = "engineerGithub";
    const staffE = new Engineer("anon", "test@test.com", 100, testValue);
    expect(staffE.getGithub()).toBe(testValue);

})



test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const staffE = new Engineer("anon", "test@test.com", "engineerGithub", 100);
    expect(staffE.getRole()).toBe(testValue);
})