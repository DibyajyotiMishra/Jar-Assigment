import MovieActionTypes from '../actions/action.types';

const INITIAL_STATE = {
  movies: [],
  page: 1,
  movieType: 'popular',
  searchQuery: '',
  searchResult: [],
  movieDetails: [],
  currentMovie: {},
};

const movieReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case MovieActionTypes.MOVIES_LIST:
      return {
        ...state,
        movies: action.payload,
      };
    case MovieActionTypes.RESPONSE_PAGE:
      return {
        ...state,
        page: action.payload.page,
      };
    case MovieActionTypes.LOAD_MORE_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.movies],
        page: action.payload.page,
      };
    case MovieActionTypes.MOVIE_TYPE:
      return {
        ...state,
        movieType: action.payload,
      };
    case MovieActionTypes.SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case MovieActionTypes.SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload,
      };
    case MovieActionTypes.MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
      };
    case MovieActionTypes.CLEAR_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: [],
      };
    case MovieActionTypes.CURRENT_MOVIE:
      return {
        ...state,
        currentMovie: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
