
let COLOR = true;
let WINNER = false;

// function that checks if there is a win
function win (turn) {
    if (turn === "redturn") {
        return redHorizontalWins() || redVerticalWins() || redDiagonalWins() || redReverseDiagonalWins();
    }
    else if (turn === "yellowturn") {
        return yellowHorizontalWins() || yellowVerticalWins() || yellowDiagonalWins() || yellowReverseDiagonalWins();
    }
}

// red horizontal wins
function redHorizontalWins() {
    const reds = document.querySelectorAll(".redturn")
    // console.log(reds)
    let rowWin = false;
    let rowMatches = 1;
    for (let i=0; i<reds.length; i++) {
        const red = reds[i];
        const circlePosition = red.classList[0];
        // convert row into integer using parse int 
        const row = circlePosition[circlePosition.length - 1];
        if (i > 0) {
            let prevRow = reds[i - 1].classList[0];
            console.log('checking horizontal', row, prevRow);
        //convert prevRow into integer
        //make sure difference is 1 using Math.abs
            if (row === prevRow[prevRow.length - 1]) {
                rowMatches++;
                console.log("checking", rowMatches);
            }
        }
        if (rowMatches === 4) {
            console.log('checking win');
            rowWin = true;
            console.log(rowMatches, rowWin);
            break;
        }
    }
    let columnWin = false;
    let columnMatches = 1;
    for (let i=0; i<reds.length; i++) {
        const red = reds[i];
        const circlePosition = red.classList[0];
        const column = parseInt(circlePosition[1]);
        if (i > 0) {
            let prevCol = reds[i - 1].classList[0];
            if (Math.abs(column - parseInt(prevCol[1]))=== 1) {
                // makes sure result wont be + or - values but just 1
                columnMatches++;
            }
        }
        if (columnMatches === 4) {
            columnWin = true;
            break;
        }
    }
    return rowWin && columnWin;
}

// red vertical wins
function redVerticalWins() {
    const reds = document.querySelectorAll(".redturn")
    // console.log(reds)
    let rowWin = false;
    let rowMatches = 1;
    for (let i=0; i<reds.length; i++) {
        const red = reds[i];
        const circlePosition = red.classList[0];
        // convert row into integer using parse int 
        const row = parseInt(circlePosition[circlePosition.length-1]);
        if (i > 0) {
            let prevRow = reds[i - 1].classList[0];
            console.log(row, prevRow);
        //convert prevRow into integer
        //make sure difference is 1 using Math.abs
            if (Math.abs(row - parseInt(prevRow[prevRow.length-1]))=== 1) {
                rowMatches++;
                console.log("checking", rowMatches);
            }
        }
        if (rowMatches === 4) {
            console.log('checking win');
            rowWin = true;
            console.log(rowMatches, rowWin);
            break;
        }
    }
    let columnWin = false;
    let columnMatches = 1;
    for (let i=0; i<reds.length; i++) {
        const red = reds[i];
        const circlePosition = red.classList[0];
        const column = circlePosition[1];
        if (i > 0) {
            let prevCol = reds[i - 1].classList[0];
            if (column === prevCol[1]) {
                // makes sure result wont be + or - values but just 1
                columnMatches++;
            }
        }
        if (columnMatches === 4) {
            columnWin = true;
            break;
        }
    }
    return rowWin && columnWin;
}

// yellow horizontal wins
function yellowHorizontalWins() {
    const yellows = document.querySelectorAll(".yellowturn")
    let rowWin = false;
    let rowMatches = 1;
    for (let i=0; i<yellows.length; i++) {
        const yellow = yellows[i];
        const circlePosition = yellow.classList[0];
        // convert row into integer using parse int 
        const row = circlePosition[circlePosition.length - 1];
        if (i > 0) {
            let prevRow = yellows[i - 1].classList[0];
            console.log(row, prevRow);
        //convert prevRow into integer
        //make sure difference is 1 using Math.abs
            if (row === prevRow[prevRow.length - 1]) {
                rowMatches++;
                console.log("checking", rowMatches);
            }
        }
        if (rowMatches === 4) {
            rowWin = true;
            console.log(rowMatches, rowWin);
            break;
        }
    }
    let columnWin = false;
    let columnMatches = 1;
    for (let i=0; i<yellows.length; i++) {
        const yellow = yellows[i];
        const circlePosition = yellow.classList[0];
        const column = parseInt(circlePosition[1]);
        if (i > 0) {
            let prevCol = yellows[i - 1].classList[0];
            if (Math.abs(column - parseInt(prevCol[1]))=== 1) {
                // makes sure result wont be + or - values but just 1
                columnMatches++;
            }
        }
        if (columnMatches === 4) {
            columnWin = true;
            break;
        }
    }
    return rowWin && columnWin;
}

// yellow vertical winss
function yellowVerticalWins() {
    const yellows = document.querySelectorAll(".yellowturn")
    // console.log(reds)
    let rowWin = false;
    let rowMatches = 1;
    for (let i=0; i<yellows.length; i++) {
        const yellow = yellows[i];
        const circlePosition = yellow.classList[0];
        // convert row into integer using parse int 
        const row = parseInt(circlePosition[circlePosition.length-1]);
        if (i > 0) {
            let prevRow = yellows[i - 1].classList[0];
            console.log(row, prevRow);
        //convert prevRow into integer
        //make sure difference is 1 using Math.abs
            if (Math.abs(row - parseInt(prevRow[prevRow.length-1]))=== 1) {
                rowMatches++;
                console.log("checking", rowMatches);
            }
        }
        if (rowMatches === 4) {
            rowWin = true;
            console.log(rowMatches, rowWin);
            break;
        }
    }
    let columnWin = false;
    let columnMatches = 1;
    for (let i=0; i<yellows.length; i++) {
        const yellow = yellows[i];
        const circlePosition = yellow.classList[0];
        const column = circlePosition[1];
        if (i > 0) {
            let prevCol = yellows[i - 1].classList[0];
            if (column === prevCol[1]) {
                // makes sure result wont be + or - values but just 1
                columnMatches++;
            }
        }
        if (columnMatches === 4) {
            columnWin = true;
            break;
        }
    }
    return rowWin && columnWin;
}

// red diagonal wins
function redDiagonalWins() {
    const reds = [...document.querySelectorAll(".redturn")]
    const selectedReds = [];
    let c = 1;
    let r = 1;
    let startingElement = [];
    let startingRowElement = [];
    
// columns;
    for (let i=0; i<7; i++) {
        const firstReds = reds.filter(function(red){
            console.log("red:",red, red.classList[0][1], c);
            return red.classList[0][1] == c;
        })
        console.log("firstReds:",firstReds);
        if (firstReds.length === 0) {
            c++;
            continue;
        } else {
            startingElement = firstReds;
        }
    }
    console.log("startingElement:",startingElement);
    let occurances = 1;
    console.log('startingElement', startingElement);
    startingElement.forEach(function(element){
        for (let i=1; i<4; i++) {
            const next = reds.find(function(red){
                return Math.abs(parseInt(red.classList[0][1]) - parseInt(element.classList[0][1])) === i;
            }) 
            console.log('match', next, element, occurances);
            if (next) {
                occurances++;
                continue;
            } else {
                occurances = 1;
                break;
            }
        }
    })

// rows;
    for (let i=0; i<6; i++) {
        const firstReds = reds.filter(function(red){
            console.log("red:",red);
            return red.classList[0][3] == r;
        })
        console.log("firstReds:",firstReds);
        if (firstReds.length === 0) {
            r++;
            continue;
        } else {
            startingRowElement = firstReds;
        }
    }
    console.log("startingRowElement:",startingRowElement);
    let rowOccurances = 1;
    startingRowElement.forEach(function(element){
        for (let i=1; i<4; i++) {
            const next = reds.find(function(red){
                return Math.abs(parseInt(red.classList[0][3]) - parseInt(element.classList[0][3])) === i;
            })
            if (next) {
                rowOccurances++;
                continue;
            } else {
                rowOccurances = 1;
                break;
            }
        }
    })
    console.log("rowOccurances:",rowOccurances);
    console.log("occurances:", occurances, rowOccurances >= 4 && occurances >=4);
    return occurances >=4 && rowOccurances >=4 ;
}

// red reverse diagonal wins
function redReverseDiagonalWins() {
    const reds = [...document.querySelectorAll(".redturn")]
    const selectedReds = [];
    let c = 7;
    let r = 6;
    let startingElement = [];
    let startingRowElement = [];
// columns;
    for (let i=6; i>=0; i--) {
        const firstReds = reds.filter(function(red){
            console.log("red:",red);
            return red.classList[0][1] == c;
        })
        console.log("firstReds:",firstReds);
        if (firstReds.length === 0) {
            c--;
            continue;
        } else {
            startingElement = firstReds;
        }
    }
    console.log("startingElement:",startingElement);
    let occurances = 1;
    startingElement.forEach(function(element){
        for (let i=1; i<4; i++) {
            const next = reds.find(function(red){
                return Math.abs(parseInt(red.classList[0][1]) - parseInt(element.classList[0][1])) === i;
            }) 
            if (next) {
                occurances++;
                continue;
            } else {
                occurances = 1;
                break;
            }
        }
    })

// rows;
    for (let i=0; i<6; i++) {
        const firstReds = reds.filter(function(red){
            console.log("red:",red);
            return red.classList[0][3] == r;
        })
        console.log("firstReds:",firstReds);
        if (firstReds.length === 0) {
            r++;
            continue;
        } else {
            startingRowElement = firstReds;
        }
    }
    console.log("startingRowElement:",startingRowElement);
    let rowOccurances = 1;
    startingRowElement.forEach(function(element){
        for (let i=1; i<4; i++) {
            const next = reds.find(function(red){
                return Math.abs(parseInt(red.classList[0][3]) - parseInt(element.classList[0][3])) === i;
            })
            if (next) {
                rowOccurances++;
                continue;
            } else {
                rowOccurances = 1;
                break;
            }
        }
    })
    console.log("rowOccurances:",rowOccurances);
    console.log("occurances:", occurances, rowOccurances >= 4 && occurances >=4);
    return occurances >=4 && rowOccurances >=4 ;
}

// yellow diagonal wins
function yellowDiagonalWins() {
    const yellows = [...document.querySelectorAll(".yellowturn")]
    const selectedYellows = [];
    let c = 1;
    let r = 1;
    let startingElement = [];
    let startingRowElement = [];
// columns;
    for (let i=0; i<7; i++) {
        const firstYellows = yellows.filter(function(yellow){
            console.log("yellow:",yellow);
            return yellow.classList[0][1] == c;
        })
        console.log("firstYellows:",firstYellows);
        if (firstYellows.length === 0) {
            c++;
            continue;
        } else {
            startingElement = firstYellows;
        }
    }
    console.log("startingElement:",startingElement);
    let occurances = 1;
    startingElement.forEach(function(element){
        for (let i=1; i<4; i++) {
            const next = yellows.find(function(yellow){
                return Math.abs(parseInt(yellow.classList[0][1]) - parseInt(element.classList[0][1])) === i;
            }) 
            if (next) {
                occurances++;
                continue;
            } else {
                occurances = 1;
                break;
            }
        }
    })

// rows;
    for (let i=0; i<6; i++) {
        const firstYellows = yellows.filter(function(yellow){
            console.log("yellow:",yellow);
            return yellow.classList[0][3] == r;
        })
        console.log("firstYellows:",firstYellows);
        if (firstYellows.length === 0) {
            r++;
            continue;
        } else {
            startingRowElement = firstYellows;
        }
    }
    console.log("startingRowElement:",startingRowElement);
    let rowOccurances = 1;
    startingRowElement.forEach(function(element){
        for (let i=1; i<4; i++) {
            const next = yellows.find(function(yellow){
                return Math.abs(parseInt(yellow.classList[0][3]) - parseInt(element.classList[0][3])) === i;
            })
            if (next) {
                rowOccurances++;
                continue;
            } else {
                rowOccurances = 1;
                break;
            }
        }
    })
    console.log("rowOccurances:",rowOccurances);
    console.log("occurances:", occurances, rowOccurances >= 4 && occurances >=4);
    return occurances >=4 && rowOccurances >=4 ;
}

// yellow reverse diagonal wins
function yellowReverseDiagonalWins() {
    const yellows = [...document.querySelectorAll(".yellowturn")]
    const selectedYellows = [];
    let c = 7;
    let r = 6;
    let startingElement = [];
    let startingRowElement = [];
// columns;
    for (let i=6; i>=0; i--) {
        const firstYellows = yellows.filter(function(yellow){
            console.log("yellow:",yellow);
            return yellow.classList[0][1] == c;
        })
        console.log("firstYellows:",firstYellows);
        if (firstYellows.length === 0) {
            c--;
            continue;
        } else {
            startingElement = firstYellows;
        }
    }
    console.log("startingElement:",startingElement);
    let occurances = 1;
    startingElement.forEach(function(element){
        for (let i=1; i<4; i++) {
            const next = yellows.find(function(yellow){
                return Math.abs(parseInt(yellow.classList[0][1]) - parseInt(element.classList[0][1])) === i;
            }) 
            if (next) {
                occurances++;
                continue;
            } else {
                occurances = 1;
                break;
            }
        }
    })

// rows;
    for (let i=0; i<6; i++) {
        const firstYellows = yellows.filter(function(yellow){
            console.log("yellow:",yellow);
            return yellow.classList[0][3] == r;
        })
        console.log("firstYellows:",firstYellows);
        if (firstYellows.length === 0) {
            r++;
            continue;
        } else {
            startingRowElement = firstYellows;
        }
    }
    console.log("startingRowElement:",startingRowElement);
    let rowOccurances = 1;
    startingRowElement.forEach(function(element){
        for (let i=1; i<4; i++) {
            const next = yellows.find(function(yellow){
                return Math.abs(parseInt(yellow.classList[0][3]) - parseInt(element.classList[0][3])) === i;
            })
            if (next) {
                rowOccurances++;
                continue;
            } else {
                rowOccurances = 1;
                break;
            }
        }
    })
    console.log("rowOccurances:",rowOccurances);
    console.log("occurances:", occurances, rowOccurances >= 4 && occurances >=4);
    return occurances >=4 && rowOccurances >=4 ;
}

// event listener for player turns, indicates who's turn
document.querySelectorAll(".column").forEach((e) => {
    e.addEventListener("click", (ul) => {
        const allItems = e.querySelectorAll('li')
            const currentItem = selectCurrentItem(allItems)
            if (COLOR){
                currentItem.classList.remove('yellowturn')
                currentItem.classList.add('redturn')
                document.getElementById("whosturn").innerText = "Yellow's Turn"
                if (win("redturn")) {
                    WINNER = true;
                    alert("Red wins!");
                }
                console.log("redturn");
            }
            else {
                currentItem.classList.remove('redturn')
                currentItem.classList.add('yellowturn')
                document.getElementById("whosturn").innerText = "Red's Turn"
                if (win("yellowturn")) {
                    WINNER = true;
                    alert("Yellow wins!");
                }
                console.log("yellowturn");
            }
            
            COLOR = !COLOR
            if(WINNER) {
                let items = document.querySelectorAll(".redturn")
                let yellowitems = document.querySelectorAll(".yellowturn")
                for (let i = items.length -1; i >= 0; i--) {
                    items[i].classList.remove("redturn");           
                }
                for (let i = yellowitems.length -1; i >= 0; i--) {
                    yellowitems[i].classList.remove("yellowturn");
                }
                WINNER = false;
            }
    })
})

// function to keep playing
function selectCurrentItem(allItems) {
    for (let i = allItems.length -1; i >= 0; i--) {
        if (allItems[i].classList.contains('redturn')||allItems[i].classList.contains('yellowturn')){
            continue;
        }
        return allItems[i];
    }
}

