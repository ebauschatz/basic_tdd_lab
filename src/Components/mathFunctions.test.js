import {add, divide, multiply, subtract} from './mathFunctions.js'

describe('the add function', () => {
    it('adds 2+9 to get 11', () => {
        expect(add(2,9)).toBe(11);
    })

    it('does not get 11 adding 2+8', () => {
        expect(add(2,8)).not.toBe(11);
    })

    it('handles negative numbers', () => {
        expect(add(5,-1)).toBe(4);
    })
})

describe('the divide function', () => {
    it('divides in the expected order', () => {
        expect(divide(4,2)).toBe(2);
    })

    it('produces expected output', () => {
        expect(divide(42,2)).toBe(21);
    })

    it('returns zero when expected', () => {
        expect(divide(0,1)).toBe(0);
    })

    it('handles remainders', () => {
        expect(divide(5,2)).toBe(2.5);
    })

    it('handles negative numbers', () => {
        expect(divide(4,-2)).toBe(-2);
    })

    it('does not ignore negative numerators', () => {
        expect(divide(-4,2)).not.toBe(2);
    })
})

describe('the multiply function', () => {
    it('produces the expected output', () => {
        expect(multiply(2,2)).toBe(4);
    })

    it('does not always produce the same output', () => {
        expect(multiply(2,3)).not.toBe(4);
    })

    it('handles single negative numbers', () => {
        expect(multiply(2,-2)).toBe(-4);
    })

    it('handles double negatives', () => {
        expect(multiply(-2,-2)).toBe(4);
    })

    it('handles zero', () => {
        expect(multiply(2,0)).toBe(0);
    })
})

describe('the subtract function', () => {
    it('produces the expected result', () => {
        expect(subtract(7,5)).toBe(2);
    })

    it('does not always produce the same result', () => {
        expect(subtract(7,6)).not.toBe(2);
    })

    it('handles a negative number as the second input', () => {
        expect(subtract(2,-3)).toBe(5);
    })

    it('handles a negative number as the first input', () => {
        expect(subtract(-2,3)).toBe(-5);
    })
})