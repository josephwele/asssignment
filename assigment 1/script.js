const res = document.getElementById("action_movies");
window.addEventListener("load", () => {
  res.innerHTML = "";
  axios
    .get(
      "https://api.themoviedb.org/3/search/movie?api_key=d891408aa52847468b922c20a9f9f09d&query=action"
    )

    .then(function (response) {
      response.data.results.map((result) => render(result));
      //   renderMovie(response.data.results[0]);
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

// let actions = "";
function render(action) {
  const { title } = action;
  const image = "http://image.tmdb.org/t/p/w200/" + action.poster_path;

  res.innerHTML += `
  <img src=${image}>
             `;
  // res.innerHTML = actions;
}

const userInput = document.getElementById("search_bar");
document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();

  searchFormat = userInput.value.replace(/\s+/g, "+").toLowerCase();

  axios
    .get(
      "https://api.themoviedb.org/3/search/movie?api_key=d891408aa52847468b922c20a9f9f09d&query=" +
        searchFormat
    )
    .then(function (response) {
      response.data.results.map((result) => renderMovie(result));
      //   renderMovie(response.data.results[0]);
      console.log(response.data.results);
    })
    .catch(function (error) {
      console.error(error);
    });
});
let container = "";
let movieList = "";
function renderMovie(movies) {
  const { original_title, release_date, overview } = movies;

  const image = "http://image.tmdb.org/t/p/w200/" + movies.poster_path;

  movieList = `

            <img src=${image}>
            
            `;
  // container = `<h1>${original_title}</h1>
  //           <p>${release_date}</p>`;

  document.getElementById("movie_list").innerHTML = movieList;
  userInput.value = "";
}
// <h1>${original_title}</h1>
// <p>${release_date}</p>
// <p>${overview}</p>
