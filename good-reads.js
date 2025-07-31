const goodreadsInfo = {
  currentlyReading: [
    {
      title: "How to win friends and arguments",
      author: "Dale"
    }
  ],

  wantToRead: [
    {
      title: "Noli Me Tangere",
      author: "Jose Rizal"
    }
  ]
}

const addNewBooks = (books,...additionalBooks) => {
    return [...books,...additionalBooks]
}
goodreadsInfo.currentlyReading = addNewBooks(goodreadsInfo.currentlyReading,{ title: "Damn", author: "James Doe"});
goodreadsInfo.wantToRead = addNewBooks(goodreadsInfo.wantToRead, {title: "Uhaw", author: "Nices"})


const showGoodReadsInfo = (info) => {
    let currentlyReading = goodreadsInfo.currentlyReading;
    let wantingToRead = goodreadsInfo.wantToRead;
    console.log("Currently Reading:")
    for(book of currentlyReading){
        console.log(`${book.title} by ${book.author}`)
        
    }
    console.log(" ")
    console.log("Wanting to Read:")


    for(book of wantingToRead){
        console.log(`${book.title} by ${book.author}`)
    }
}


showGoodReadsInfo(goodreadsInfo)