// define variables

// player Red
// player Yellow

// rows = 6;
// columns = 7;

// function to play


// function to check winner

// horizontal
for (i = 1; i <= 7; i++) {
    for (j = 1; j <= 4; j++)
}

    ...alert player wins
// vertical
for (i = 1; i <=6; i++) {
    for (j = 1; j <= 3; j++)
}

// diagonal left


// diagonal right



let COLOR = true;



document.querySelectorAll(".column").forEach((e) => {
    e.addEventListener("click", (ul) => {
        // console.log('columnclicked', ul.target)
        const allItems = e.querySelectorAll('li')
            const currentItem = selectCurrentItem(allItems)
            console.log(currentItem);
            if (COLOR){
                currentItem.classList.remove('yellowturn')
                currentItem.classList.add('redturn')
                document.getElementById("whosturn").innerText = "Yellow's Turn"
            }
            else {
                currentItem.classList.remove('redturn')
                currentItem.classList.add('yellowturn')
                document.getElementById("whosturn").innerText = "Red's Turn"
            }
            console.log(allItems)
            
            COLOR = !COLOR
    })
})

function selectCurrentItem(allItems) {
    console.log(allItems)
    for (let i = allItems.length -1; i >= 0; i--) {
        if (allItems[i].classList.contains('redturn')||allItems[i].classList.contains('yellowturn')){
            continue;
        }
        return allItems[i];
    }
}

// list condition of winning
// 4 consecutive colors in a row 
// vertical
// horizontal
// diagonal
// condition for losing - alert "you lost"
// condition for winning - alert "you win"
