const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const apiUrl = 'https://ghibliapi.herokuapp.com/films/' + urlParams.get("id")

const titleH1 = document.querySelector('#title');
const posterImg = document.querySelector('#poster');
const paragraph = document.querySelector('#description');

posterImg.classList.add('posterview')
fetch(apiUrl)
.then(response => response.json())
.then(movie => {
    titleH1.innerText = movie.title;
    posterImg.src = movie.image;
    paragraph.innerText = movie.description
});
