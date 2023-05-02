import compareChoices from "../logic/Logic"
import {describe, expect, test} from '@testing-library/react'

describe("Result", () => {
    test("Should win if sax vs sten", () => {
        //Given
        const sax = 1
        const sten = 2
    
        //When
       const result = compareChoices(sax, sten) 

        //Then
        expect(result).toBe("Du förlorade!")
    })
})