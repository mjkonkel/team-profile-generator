const Manager = require('../lib/Manager')

test('Will this create and get the office number of the Manager?', ()=> {
    const man = new Manager('qwe', 2, 'qwe@qwe.com', 2)
    expect(man.officeNum).toBe(2)
    expect(man.getOfficeNum()).toBe(2)
    expect(man.getRole()).toBe('Manager')
})