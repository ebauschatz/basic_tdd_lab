import {capitalizeFirstLetter, concatenateTwoWords, getSecondWord} from './stringFunctions.js'

describe('the capitalize first letter function', () => {
    it('will return the same string with the first letter capitalized', () => {
        expect(capitalizeFirstLetter('test string')).toBe('Test string');
    })

    it('will not capitalize other letters', () => {
        expect(capitalizeFirstLetter('test string')).not.toBe('TEST STRING');
    })

    it('will preserve capitalization of other letters', () => {
        expect(capitalizeFirstLetter('tEsT sTrInG')).toBe('TEsT sTrInG');
    })
})

describe('the concatenate two words function', () => {
    it('will correctly concatenate two strings', () => {
        expect(concatenateTwoWords('test', 'string')).toBe('teststring');
    })

    it('will not remove whitespace', () => {
        expect(concatenateTwoWords('test ', 'string')).not.toBe('teststring');
    })
})

describe ('the return second word function', () => {
    it('will return the second word', () => {
        expect(getSecondWord('test string')).toBe('string');
    })

    it('will not just return the last word', () => {
        expect(getSecondWord('test longer string')).not.toBe('string');
    })
})