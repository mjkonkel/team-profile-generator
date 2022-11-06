const Manager = require('../lib/Manager')

test('will this create office number', ()=> {
    const man = new Manager('qwe', 2, 'qwe@qwe.com', 2)
    expect(man.officeNum).toBe(2)
    expect(man.getOfficeNum()).toBe(2)
    expect(man.getRole()).toBe('Manager')
})