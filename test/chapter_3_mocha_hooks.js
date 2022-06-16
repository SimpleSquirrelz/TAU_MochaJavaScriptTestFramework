describe("Mocha Hooks", ()=>{

    before("Execute Before All Test", ()=>{
        console.log("Execute Before All Test")
    })

    beforeEach("Execute Before Each Test", ()=>{
        console.log("Execute Before Each Test")
    })

    after("Execute After All Tests", ()=>{
        console.log("Execute After All Tests")
    })

    afterEach("Execute After Each Test", ()=>{
        console.log("Execute After Each Test")
    })

    it("Mocha Hooks Test", ()=>{
        console.log("Mocha Hooks Test")
    })

})