const { suma, resta } = require('./math.js')

test('Probar suma 2+3 = 5', () => {
    expect(suma(2, 3)).toBe(5);
})

test('Probar resta 5-3 = 2', () =>{
    expect(resta(5,3)).toBe(2)
}) 