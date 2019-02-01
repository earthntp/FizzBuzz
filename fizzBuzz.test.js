const FizzBuzz = require("./fizzBuzz");

test("input 1", ()=> {
    expect(FizzBuzz(1)).toBe(1)
})
test("input 3", ()=> {
    expect(FizzBuzz(3)).toBe("Fizz")
})
test("input 5", ()=> {
    expect(FizzBuzz(5)).toBe("Buzz")
})
test("input 15", ()=> {
    expect(FizzBuzz(15)).toBe("FizzBuzz")
})