
let COLOR = true;

// check if there is a win
function win (turn) {
    if (turn === "redturn") {
        return redHorizontalWins() || redVerticalWins() || redDiagonalWins();
    }
    else if (turn === "yellowturn") {
        return yellowHorizontalWins() || yellowVerticalWins();
    }
}

//RED
// horizontal win
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

//vertical wins
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

//YELLOW
// horizontal win
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

// vertical wins
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

// diagonal wins
//   divide into 4 quadrants
// var topLeft = 0;
// var topRight = topLeft + 3;
//   use double loop
// for(var i = 0; i < 3; i++){
//     for(var j = 0; j < 4; j++){
//         if($("#" + topLeft).attr("data-player") == p
//         && $("#" + topLeft + 8).attr("data-player") == p
//         && $("#" +topLeft + 16).attr("data-player") == p
//         && $("#" +topLeft + 24).attr("data-player") == p){
//             return true;
//         }

//         if($("#" + topRight).attr("data-player") == p
//         && $("#" + topRight + 6).attr("data-player") == p
//         && $("#" +topRight + 12).attr("data-player") == p
//         && $("#" +topRight + 18).attr("data-player") == p){
//             return true;
//         }

//         topLeft++;
//         topRight = topLeft + 3;
//     }
//     top = i * 7 + 7;
//     topRight = topLeft + 3;
// }

// return false;


function redDiagonalWins() {
    const reds = document.querySelectorAll(".redturn")
    const selectedReds = [];
    let c = 0;
    reds.forEach(function(red){
        if (parseInt(red.classList[0][1]) !== c){
            selectedReds.push(red)
            c = parseInt(red.classList[0][1])
        }
    })
    console.log(selectedReds);
    let rowWin = false;
    let rowMatches = 1;
    for (let i=0; i<selectedReds.length; i++) {
        const red = selectedReds[i];
        const circlePosition = red.classList[0];
        // convert row into integer using parse int 
        const row = parseInt(circlePosition[circlePosition.length - 1]);
        if (i > 0) {
            let prevRow = reds[i - 1].classList[0];
            console.log(row, prevRow);
        //convert prevRow into integer
        //make sure difference is 1 using Math.abs
            if (row - parseInt(prevRow[prevRow.length - 1])=== 1) {
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
    for (let i=0; i<reds.length; i++) {
        const red = reds[i];
        const circlePosition = red.classList[0];
        const column = parseInt(circlePosition[1]);
        if (i > 0) {
            let prevCol = reds[i - 1].classList[0];
            if (column - parseInt(prevCol[1])=== 1) {
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

document.querySelectorAll(".column").forEach((e) => {
    e.addEventListener("click", (ul) => {
        // console.log('columnclicked', ul.target)
        const allItems = e.querySelectorAll('li')
            const currentItem = selectCurrentItem(allItems)
            if (COLOR){
                currentItem.classList.remove('yellowturn')
                currentItem.classList.add('redturn')
                document.getElementById("whosturn").innerText = "Yellow's Turn"
                if (win("redturn")) {
                    alert("Red wins!");
                }
            }
            else {
                currentItem.classList.remove('redturn')
                currentItem.classList.add('yellowturn')
                document.getElementById("whosturn").innerText = "Red's Turn"
                if (win("yellowturn")) {
                    alert("Yellow wins!");
                }
            }
            
            COLOR = !COLOR
    })
})

function selectCurrentItem(allItems) {
    for (let i = allItems.length -1; i >= 0; i--) {
        if (allItems[i].classList.contains('redturn')||allItems[i].classList.contains('yellowturn')){
            continue;
        }
        return allItems[i];
    }
}

