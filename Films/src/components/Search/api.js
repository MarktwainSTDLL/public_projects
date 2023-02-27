const API_KEY = 'API_KEY';

export async function searchMovies(query) {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
  const data = await response.json();
  return data.results;
}
