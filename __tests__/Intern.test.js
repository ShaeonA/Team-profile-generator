const Intern = require('../lib/Intern')
const Employee = require("../lib/Employee");

test("can set school via getSchool ()", () => {
  const testValue = "internSchool";
  const staffI = new Intern ("anon", "test@test.com", 100 , testValue );
  expect(staffI.getSchool()).toBe(testValue);

})


test("getRole() should return \"Intern\"",() => {
    const testValue = "Intern";
    const staffI = new Intern ( "anon", "test@test.com", "internSchool" , 100);
    expect(staffI.getRole()).toBe(testValue);
  })


