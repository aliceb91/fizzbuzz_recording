const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz', () => {
    it('returns Fizz when the provided number is 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    })
})

describe('fizzBuzz', () => {
    it('returns Buzz when the provided number is 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz')
    })
})

describe('fizzBuzz', () => {
    it('returns 8 when the provided number is 8', () => {
        expect(fizzBuzz(8)).toBe(8)
    })
})

describe('fizzBuzz', () => {
    it('returns FizzBuzz when the provided number is 15', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
});

describe('fizzBuzz', () => {
    it('returns Fizz when the provided number is 18', () => {
        expect(fizzBuzz(18)).toBe('Fizz');
    });
});

describe('fizzBuzz', () => {
    it('returns Buzz when the provided number is 20', () => {
        expect(fizzBuzz(20)).toBe('Buzz');
    });
});

describe('fizzBuzz', () => {
    it('returns FizzBuzz when the provided number is 30', () => {
        expect(fizzBuzz(30)).toBe('FizzBuzz');
    });
});

describe('fizzBuzz', () => {
    it('returns 7 when the provided number is 7', () => {
        expect(fizzBuzz(7)).toBe(7);
    });
});
