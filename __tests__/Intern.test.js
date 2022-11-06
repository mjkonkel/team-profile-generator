const Intern = require('../lib/Intern')

test('will this create school', ()=> {
    const int = new Intern('qqq', 4, 'qqq@qqq.com', 'qqq')
    expect(int.school).toBe('qqq')
    expect(int.getSchool()).toBe('qqq')
    expect(int.getRole()).toBe('Intern')
})