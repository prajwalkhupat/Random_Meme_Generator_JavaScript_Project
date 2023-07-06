const generateMemeBtn = document.querySelector(".generate-meme-btn");
const memeImage = document.querySelector("img");
const memeTitle = document.querySelector(".meme-title");
const memeAuthor = document.querySelector(".meme-author");

const updateDetails = (url, title, author) =>{
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by : ${author}`;
}

const generateMene = () =>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) =>{
        updateDetails(data.url, data.title, data.author);
    })
    .catch((error) => document.write("Can't Fetch Data"));
}

generateMemeBtn.addEventListener("click",generateMene);

generateMene();
