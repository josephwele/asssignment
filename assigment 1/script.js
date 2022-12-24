const res = document.getElementById("movie_list");
const defaultImage =
  "https://media.istockphoto.com/photos/sunrise-picture-id531253600?b=1&k=20&m=531253600&s=612x612&w=0&h=7cM1nhGHC9R5ia9EAWRIWIVfnjiriHbOv1B7BwhbfvU=";
const baseUrl =
  "https://api.themoviedb.org/3/search/movie?api_key=d891408aa52847468b922c20a9f9f09d&query=";

function fetchData(url, cb) {
  axios
    .get(url)
    .then((response) => {
      response.data.results.map((result) => (cb ? cb(result) : render(result)));
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });
}

window.addEventListener("load", () => {
  const url = baseUrl + "action";
  fetchData(url);
});

function render({ title, poster_path }) {
  const imgSrc = poster_path
    ? `${"http://image.tmdb.org/t/p/w200/" + poster_path}`
    : defaultImage;
  res.innerHTML += `
  <div class="btn">
  <img src=${imgSrc}>
  <h2>${title}</h2>
  </div>
             `;
}
const movie = document.getElementById("movie_list");
const userInput = document.getElementById("search_bar");
document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  res.innerHTML = "";
  document.getElementById("nav").innerHTML = "";
  searchFormat = userInput.value.replace(/\s+/g, "+").toLowerCase();
  const url = baseUrl + searchFormat;
  fetchData(url);
});

function renderMovie(movies) {
  const { original_title, release_date, overview } = movies;

  const image = "http://image.tmdb.org/t/p/w200/" + movies.poster_path;

  movie.innerHTML += `<div class="btn">
  <img src=${image}>
  <h2>${original_title}</h2>
  <p>${release_date}</p>
            </div>
            `;
  userInput.value = "";
}
// Romance
document.getElementById("click").addEventListener("click", (e) => {
  e.preventDefault();
  movie.innerHTML = "";
  const url = baseUrl + "romantic";
  fetchData(url);
});

// popular movies
document.getElementById("popular").addEventListener("click", (e) => {
  e.preventDefault();
  movie.innerHTML = "";
  const url = baseUrl + "popular";
  fetchData(url);
});

/// Carton Movies
document.getElementById("cartoon").addEventListener("click", (e) => {
  e.preventDefault();
  movie.innerHTML = "";
  const url = baseUrl + "cartoon";
  fetchData(url);
});

// Horror Movies
document.getElementById("horror").addEventListener("click", (e) => {
  e.preventDefault();
  movie.innerHTML = "";
  const url = baseUrl + "horror";
  fetchData(url);
});

// Recent Movies

document.getElementById("recent").addEventListener("click", (e) => {
  e.preventDefault();
  movie.innerHTML = "";
  const url = baseUrl + "recent";
  fetchData(url);
});

// Spiritual

document.getElementById("spiritual").addEventListener("click", (e) => {
  e.preventDefault();
  movie.innerHTML = "";
  const url = baseUrl + "spiritual";
  fetchData(url, render6);
});
