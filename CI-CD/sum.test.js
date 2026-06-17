import sum from "./sum.js";

//Unit Testing

describe("test for sum functions",()=>{
    test("adds 2+2 to equal 4",()=>{
        expect(sum(2,2)).toBe(4);
    })
    test("adds -1 + -3 to equal 4",()=>{
        expect(sum(-1,-3)).toBe(-4);
    })
})

