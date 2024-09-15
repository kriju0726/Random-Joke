const jokeContainer = document.querySelector("#joke");

const btn = document.getElementById("btn");
//const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";



// let getJoke = () => {
//     jokeContainer.classList.remove("fade");
//     fetch(url)
//     .then(data => data.json())
//     .then(item => {
//         jokeContainer.textContent = `${item.joke}`;
//         jokeContainer.classList.add("fade");
//     });
// }
// btn.addEventListener("click", getJoke);
// getJoke();



btn.addEventListener("click", async (evt) => {
    jokeContainer.classList.remove("fade");
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single");
    const data = await response.json();
    jokeContainer.textContent = `${data.joke}`;
    jokeContainer.classList.add("fade");
    
});



