let joke = document.getElementById("joke")
let punchline = document.getElementById("punchline")
let jokeBtn = document.getElementById("clickMe")


const getJoke = async () => {
  try {
    fetch("https://official-joke-api.appspot.com/random_joke")
  .then((response) => response.json())
  .then((data) => {
    joke.textContent = `${data.setup}`
    punchline.textContent = `* ${data.punchline}`
  })
  
  

  } catch (err) {
    console.error('Error:', err);
  }
};


