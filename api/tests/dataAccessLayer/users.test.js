const { create, get } = require('../../src/dataAccessLayer/users/users.dal')


const user = {
    name:'santiago',
    email: 'santiagovj0422@gmail.com',
    department: 'Antioquia',
    city: 'Medellin'
}
describe('dataAccessLayer/users/users.dal.js', () => {

    describe('.get()', () => {
        it('Should return an array', () => {
            expect(get()).toBe({})
        })
    })
    describe('.create()', () => {
        it('Should add all the info', () => {
            const result = create(user)
            expect(result).toBe({})
        })
    })
})

