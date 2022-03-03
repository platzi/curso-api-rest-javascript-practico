async function getTrendingMoviesPreview() {
  const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
  const data = await res.json();

  const movies = data.results;
  movies.forEach(movie => {
    const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')
    
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');

    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('alt', movie.title);
    movieImg.setAttribute(
      'src',
      'https://image.tmdb.org/t/p/w300' + movie.poster_path,
    );

    movieContainer.appendChild(movieImg);
    trendingPreviewMoviesContainer.appendChild(movieContainer);
  });
}

getTrendingMoviesPreview();
