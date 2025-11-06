const { suma } = require('./math.js')

test('Probar suma 2+3 =5', () => {
    expect(suma(2, 3)).toBe(7);
})
