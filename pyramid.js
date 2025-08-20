let height = 5;

for (let i = 0; i < height; i++) {
    let row = "";

    // spaces (decrease as row increases)
    for (let k = 0; k < height - i ; k++) {
        row += " ";
    }

    // stars (increase as row increases)
    for (let j = 0; j < 2 * i + 1; j++) {
        row += "*";
    }

    console.log(row);
}
