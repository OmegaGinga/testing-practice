import { capitalize, reverseString, calculator, cesarCipher, analyzeArray } from './tests.js';


test('first letter is capital', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('word is reversed', () => {
    expect(reverseString('the parent is near')).toBe('raen si tnerap eht');
});

test('correct operation', () => {
    const calc = calculator();
    expect(calc.sum(1,2)).toBe(3);
    expect(calc.mult(3,2)).toBe(6);
    expect(calc.sub(5,2)).toBe(3);
    expect(calc.div(6,2)).toBe(3);
});

test('cesar cipher', () => {
    expect(cesarCipher('xyz',3)).toBe('abc');
    expect(cesarCipher('HeLLo',3)).toBe('KhOOr');
    expect(cesarCipher('Hello, World!',3)).toBe('Khoor, Zruog!');
});

test('return object with average, min, max, length', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});