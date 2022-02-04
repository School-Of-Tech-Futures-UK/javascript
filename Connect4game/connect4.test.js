
const Connect4Game = require('./logic')

describe('When calling RedOrYellow function', () => {

    const scenarios=[
        {one: "yellow", two: "yellow", three: "yellow", four: "yellow", expected: "yellow"},
        {one: "red", two: "red", three: "red", four: "red", expected: "red"},

        {one: "red", two: "yellow", three: "yellow", four: "yellow", expected: "nobody"},
        {one: "yellow", two: "red", three: "yellow", four: "yellow", expected: "nobody"},
        {one: "yellow", two: "yellow", three: "red", four: "yellow", expected: "nobody"},
        {one: "yellow", two: "yellow", three: "yellow", four: "red", expected: "nobody"},

        {one: "red", two: "red", three: "yellow", four: "yellow", expected: "nobody"},
        {one: "yellow", two: "red", three: "red", four: "yellow", expected: "nobody"},
        {one: "yellow", two: "yellow", three: "red", four: "red", expected: "nobody"},

        {one: "red", two: "red", three: "red", four: "yellow", expected: "nobody"},
        {one: "yellow", two: "red", three: "red", four: "red", expected: "nobody"},

        {one: "yellow", two: "red", three: "red", four: "red", expected: "nobody"},
        {one: "red", two: "yellow", three: "red", four: "red", expected: "nobody"},
        {one: "red", two: "red", three: "yellow", four: "red", expected: "nobody"},
        {one: "red", two: "red", three: "red", four: "yellow", expected: "nobody"},

        {one: "yellow", two: "yellow", three: "red", four: "red", expected: "nobody"},
        {one: "red", two: "yellow", three: "yellow", four: "red", expected: "nobody"},
        {one: "red", two: "red", three: "yellow", four: "yellow", expected: "nobody"},

        {one: "yellow", two: "yellow", three: "yellow", four: "red", expected: "nobody"},
        {one: "red", two: "yellow", three: "yellow", four: "yellow", expected: "nobody"}
    ]

    scenarios.forEach(({one, two, three, four, expected}) => {
        describe(`When checking ${JSON.stringify(one)}, ${JSON.stringify(two)}, ${JSON.stringify(three)} and  ${JSON.stringify(four)}`, () => {
            let result;
            
            beforeEach(() => {
            result = Connect4Game.RedOrYellow(one, two, three, four)
            })
            
            it(`returns ${expected}`, () => {
             expect(result).toEqual(expected)
            })
        })
    })

});

describe('When calling getLowestAvailableRow function for row#0', () => {

    const grid0 = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
    ]

    const grid1 = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [!null, !null, !null, !null, !null, !null, !null]
    ]

    const grid2 = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [!null, !null, !null, !null, !null, !null, !null],
        [!null, !null, !null, !null, !null, !null, !null]
    ]

    const grid3 = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [!null, !null, !null, !null, !null, !null, !null],
        [!null, !null, !null, !null, !null, !null, !null],
        [!null, !null, !null, !null, !null, !null, !null]
    ]

    const grid4 = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [!null, !null, !null, !null, !null, !null, !null],
        [!null, !null, !null, !null, !null, !null, !null],
        [!null, !null, !null, !null, !null, !null, !null],
        [!null, !null, !null, !null, !null, !null, !null]
    ]

    const grid5 = [
        [null, null, null, null, null, null, null],
        [!null, !null, !null, !null, !null, !null, !null],
        [!null, !null, !null, !null, !null, !null, !null],
        [!null, !null, !null, !null, !null, !null, !null],
        [!null, !null, !null, !null, !null, !null, !null],
        [!null, !null, !null, !null, !null, !null, !null]
    ]

    const grid6 = [
        [!null, !null, !null, !null, !null, !null, !null],
        [!null, !null, !null, !null, !null, !null, !null],
        [!null, !null, !null, !null, !null, !null, !null],
        [!null, !null, !null, !null, !null, !null, !null],
        [!null, !null, !null, !null, !null, !null, !null],
        [!null, !null, !null, !null, !null, !null, !null]
    ]

    const scenarios = [
        {column: 1, grid: grid0, expected: 5},
        {column: 2, grid: grid0, expected: 5},
        {column: 3, grid: grid0, expected: 5},
        {column: 4, grid: grid0, expected: 5},
        {column: 5, grid: grid0, expected: 5},
        {column: 6, grid: grid0, expected: 5},
        {column: 7, grid: grid0, expected: 5},

        {column: 1, grid: grid1, expected: 4},
        {column: 2, grid: grid1, expected: 4},
        {column: 3, grid: grid1, expected: 4},
        {column: 4, grid: grid1, expected: 4},
        {column: 5, grid: grid1, expected: 4},
        {column: 6, grid: grid1, expected: 4},
        {column: 7, grid: grid1, expected: 4},

        {column: 1, grid: grid2, expected: 3},
        {column: 2, grid: grid2, expected: 3},
        {column: 3, grid: grid2, expected: 3},
        {column: 4, grid: grid2, expected: 3},
        {column: 5, grid: grid2, expected: 3},
        {column: 6, grid: grid2, expected: 3},
        {column: 7, grid: grid2, expected: 3},

        {column: 1, grid: grid3, expected: 2},
        {column: 2, grid: grid3, expected: 2},
        {column: 3, grid: grid3, expected: 2},
        {column: 4, grid: grid3, expected: 2},
        {column: 5, grid: grid3, expected: 2},
        {column: 6, grid: grid3, expected: 2},
        {column: 7, grid: grid3, expected: 2},

        {column: 1, grid: grid4, expected: 1},
        {column: 2, grid: grid4, expected: 1},
        {column: 3, grid: grid4, expected: 1},
        {column: 4, grid: grid4, expected: 1},
        {column: 5, grid: grid4, expected: 1},
        {column: 6, grid: grid4, expected: 1},
        {column: 7, grid: grid4, expected: 1},

        {column: 1, grid: grid5, expected: 0},
        {column: 2, grid: grid5, expected: 0},
        {column: 3, grid: grid5, expected: 0},
        {column: 4, grid: grid5, expected: 0},
        {column: 5, grid: grid5, expected: 0},
        {column: 6, grid: grid5, expected: 0},
        {column: 7, grid: grid5, expected: 0},

        {column: 1, grid: grid6, expected: null},
        {column: 2, grid: grid6, expected: null},
        {column: 3, grid: grid6, expected: null},
        {column: 4, grid: grid6, expected: null},
        {column: 5, grid: grid6, expected: null},
        {column: 6, grid: grid6, expected: null},
        {column: 7, grid: grid6, expected: null}
    ]

    scenarios.forEach(({column, grid, expected}) => {
        describe(`When checking ${JSON.stringify(column)}, ${JSON.stringify(grid)}`, () => {
            let result;
            
            beforeEach(() => {
            result = Connect4Game.getLowestAvailableRowInColumn(column, grid)
            })
            
            it(`returns ${expected}`, () => {
             expect(result).toEqual(expected)
            })
        })
    })

});

/*describe('When calling checkWinner function', () => {

    const mapBoard = new Map()
    mapBoard.set('42',{"i":5,"j":6})

    const WinningCombination = [
        //horizontal
        ['1','2','3','4'], ['2','3','4','5'], ['3','4','5','6'], ['4','5','6','7'],
        ['8','9','10','11'], ['9','10','11','12'], ['10','11','12','13'], ['11','12','13','14'],
        ['15','16','17','18'], ['16','17','18','19'], ['17','18','19','20'], ['18','19','20','21'],
        ['22','23','24','25'], ['23','24','25','26'], ['24','25','26','27'], ['25','26','27','28'],
        ['29','30','31','32'], ['30','31','32','33'], ['31','32','33','34'], ['32','33','34','35'],
        ['36','37','38','39'], ['37','38','39','40'], ['38','39','40','41'], ['39','40','41','42']
    ]

    const scenarios = [

    ]

});*/