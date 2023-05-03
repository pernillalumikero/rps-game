import { render, screen } from "@testing-library/react"
import Logic from "../Logic"

describe("Result", () => {
        // 1=sax
        // 2=sten
        // 3=papper
    test("Should win if papper vs rock", () => {
        //Given
        const user = 3
        const computer = 2
    
        //When
       render(<Logic user={user} computer={computer} />)

       const result = screen.queryByRole("heading", {level: 3})


        //Then
        expect(result).toHaveTextContent('Du har vunnit!')
    })
    test("Should loose when scissor vs rock", () => {
        //Given
        const user = 2
        const computer = 1
    
        //When
       render(<Logic user={user} computer={computer} />)

       const result = screen.queryByRole("heading", {level: 3})

        //Then
        expect(result).toHaveTextContent('Du har förlorat!');
        // expect(result).toBeInTheDocument()
    })
    test("Should get a draw", () => {
        //Given
        const user = 1
        const computer = 1
    
        //When
       render(<Logic user={user} computer={computer} />)

       const result = screen.queryByRole("heading", {level: 3})

       //Then
       expect(result).toHaveTextContent('Oavgjort!')
    })
})