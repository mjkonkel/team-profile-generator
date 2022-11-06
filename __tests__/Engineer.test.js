const Engineer = require('../lib/Engineer')

test('will this create github', ()=> {
    const eng = new Engineer('asdf', 3, 'asdf@asdf.com', 'asdfeng')
    expect(eng.gitHub).toBe('asdfeng')
    expect(eng.getGitHub()).toBe('asdfeng')
    expect(eng.getRole()).toBe('Engineer')
})