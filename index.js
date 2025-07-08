const dnaPieces = ["A", "C", "G", "T"];

let DNA = []

function myDNA(){
    for(let i = 0; i < 24 ; i++){
        let pieceOne = dnaPieces[Math.floor(Math.random() * dnaPieces.length)]
        let pieceTwo = dnaPieces[Math.floor(Math.random() * dnaPieces.length)]
        let pieceThree = dnaPieces[Math.floor(Math.random() * dnaPieces.length)]

        let string = pieceOne + pieceTwo + pieceThree

        DNA.push(string)
   }
}

myDNA()

console.log(DNA)
