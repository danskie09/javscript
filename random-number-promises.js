// Define randomNumberPromise() function here 💖
function randomNumberPromise(){
  let rand = Math.floor(Math.random() * 10) + 1;

  console.log(rand)
   return new Promise((resolve, reject) => {
    if (rand <= 5) {
      resolve("Nice one"); // The operation was successful
    } else {
      reject("An error happened along the way.");
    }
  });
}


randomNumberPromise()
  .then((message) => {
    console.log("Resolved:", message);
  })
  .catch((error) => {
    console.error("Rejected:", error);
  });
