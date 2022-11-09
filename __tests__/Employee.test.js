const Employee = require('../lib/Employee');

test('Will this create and get the name, id, email of the Employee?', ()=>{
    const emp = new Employee('abc', 2, 'abs@abc.com')
    expect(emp.name).toBe('abc')
    expect(emp.id).toBe(2)
    expect(emp.email).toBe('abs@abc.com')
    expect(emp.getName()).toBe('abc')
    expect(emp.getID()).toBe(2)
    expect(emp.getEmail()).toBe('abs@abc.com')
    expect(emp.getRole()).toBe('Employee')
})