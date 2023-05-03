import compareChoices from "./Logic"

describe("Logic", () => {
    test("Should win if sax vs sten", () => {
        //Given
        const choises = {sax: 1, sten: 2}
    
        //When
       const result = compareChoices(choises) 

        //Then
        expect(result).toBe("Du förlorade!")
    })

})