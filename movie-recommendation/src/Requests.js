const key = process.env.REACT_APP_IMDB_API_KEY

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=d9a2926d310b627aa44739b657eac1e2&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=d9a2926d310b627aa44739b657eac1e2&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=d9a2926d310b627aa44739b657eac1e2&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=d9a2926d310b627aa44739b657eac1e2&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=d9a2926d310b627aa44739b657eac1e2&language=en-US&page=1`,
  };

  export default requests;