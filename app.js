const movieListDiv = document.querySelector("#movie-list");

fetch("https://ghibliapi.herokuapp.com/films")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((movie) => {
      console.log(movie.title);
      console.log(movie.image);
      const movieDiv = document.createElement("div");
      const movieImg = document.createElement("img");

      movieDiv.innerHTML =
        '<a href="movie.html?id=' + movie.id + '">' + movie.title + "</a><br>";
      movieImg.src = movie.image;

      let cell = document.createElement("div");
      cell.appendChild(movieDiv);
      cell.appendChild(movieImg);
      movieListDiv.appendChild(cell).className = "grid-item";
      movieImg.classList.add("poster");
      movieDiv.classList.add("title"); 
    });
  });
