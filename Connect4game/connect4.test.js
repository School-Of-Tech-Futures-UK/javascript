const Connect4Game = require('./connect4')

describe('When calling RedOrYellowFunction', () => {
    test('For the case when all tiles are red',() => {
        //Arrange
        const one = "red"
        const two = "red"
        const three = "red"
        const four = "red"
        const expectedOutput = "red"
        //Act
        const actualOutput = Connect4Game.RedOrYellow(one, two, three, four)
        //Assert
        expect(actualOutput).toStrictEqual(expectedOutput);
    } )

    test('For the case when all tiles are yellow',() => {
        //Arrange
        const one = "yellow"
        const two = "yellow"
        const three = "yellow"
        const four = "yellow"
        const expectedOutput = "yellow"
        //Act
        const actualOutput = Connect4Game.RedOrYellow(one, two, three, four)
        //Assert
        expect(actualOutput).toStrictEqual(expectedOutput);
    } )

    test('For the case when tiles are different color',() => {
        //Arrange
        const scenarios = [
            ["red","yellow","yellow","yellow"],
            ["yellow","red","yellow","yellow"],
            ["yellow","yellow","red","yellow"],
            ["yellow","yellow","yellow","red"]


        ]

        // Act
        it.each(scenarios)("when the input is in '%s'",(one, two,three,four, expectedOutput) => {
           actualOutput = RedOrYellow(one,two,three,four)
           expect(actualOutput).toBe(expectedOutput)
        } )
    } )


})