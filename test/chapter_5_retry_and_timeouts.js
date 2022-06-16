// Test Suite - Mathematical Operations

// Test Cases

// 1. Addition
// 2. Substraction
// 3. Multiplication
// 4. Division

const assert = require("assert")

describe("Mathematical Operations - Test Suite", function(){

    this.timeout(500);

    let a = 10;
    let b = 10;

    it("Addition of two numbers", (done)=>{
        let c = a+b;

        setTimeout(done, 1000);
        assert.equal(c,20)
    })

    it("Substraction of two numbers", ()=>{
        let c = a-b;

        assert.equal(c,0)
    })

    it("Multiplication of two numbers", ()=>{
        let c = a*b;

        assert.equal(c,100)
    })

    it("Division of two numbers", ()=>{
        let c = a/b;

        assert.equal(c,1)
    })

    it("This is a test for Pending Test Feature")
})