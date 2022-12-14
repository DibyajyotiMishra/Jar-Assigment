import {getMovies, SEARCH_API_URL} from '../../services/movies.service';
import MovieActionTypes from './action.types';

const dispatchMethod = (type: string, payload: any, dispatch: any) => {
  dispatch({
    type,
    payload,
  });
};

const getMoviesRequest = async (pageNumber: number, type: string) => {
  const movies = await getMovies(pageNumber, type);
  const {results, page, total_pages} = movies;
  const payload = {
    page,
    total_pages,
  };
  return {results, payload};
};

export const fetchMovies =
  (pageNumber: number, type: string) => async (dispatch: any) => {
    try {
      const {results, payload} = await getMoviesRequest(pageNumber, type);
      dispatchMethod(MovieActionTypes.MOVIES_LIST, results, dispatch);
      dispatchMethod(MovieActionTypes.RESPONSE_PAGE, payload, dispatch);
    } catch (error: any) {
      if (error.response) {
        dispatchMethod(
          MovieActionTypes.SET_ERROR,
          error.response.data.message,
          dispatch,
        );
      }
    }
  };

export const fetchMoreMovies =
  (pageNumber: number, type: string) => async (dispatch: any) => {
    try {
      const {results, payload} = await getMoviesRequest(pageNumber, type);
      dispatchMethod(
        MovieActionTypes.LOAD_MORE_MOVIES,
        {movies: results, page: payload.page, totalPages: payload.total_pages},
        dispatch,
      );
      dispatchMethod(MovieActionTypes.RESPONSE_PAGE, payload, dispatch);
    } catch (error: any) {
      if (error.response) {
        dispatchMethod(
          MovieActionTypes.SET_ERROR,
          error.response.data.message,
          dispatch,
        );
      }
    }
  };

export const setResponsePageNumber =
  (pageNumber: number, totalPages: number) => (dispatch: any) => {
    const payload = {
      page: pageNumber,
      total_pages: totalPages,
    };
    dispatchMethod(MovieActionTypes.RESPONSE_PAGE, payload, dispatch);
  };

export const setSearchResult = (query: string) => async (dispatch: any) => {
  try {
    if (query) {
      const movies = await SEARCH_API_URL(query);
      dispatchMethod(MovieActionTypes.SEARCH_RESULT, movies.results, dispatch);
    } else {
      dispatchMethod(MovieActionTypes.SEARCH_RESULT, [], dispatch);
    }
  } catch (error: any) {
    if (error.response) {
      dispatchMethod(
        MovieActionTypes.SET_ERROR,
        error.response.data.message,
        dispatch,
      );
    }
  }
};

export const setMovieType = (type: string) => (dispatch: any) => {
  dispatchMethod(MovieActionTypes.MOVIE_TYPE, type, dispatch);
};

export const setSearchQuery = (query: string) => (dispatch: any) => {
  dispatchMethod(MovieActionTypes.SEARCH_QUERY, query, dispatch);
};

export const setCurrentMovie = (movie: object) => (dispatch: any) => {
  dispatchMethod(MovieActionTypes.CURRENT_MOVIE, movie, dispatch);
};

export const clearMovieDetails = () => (dispatch: any) => {
  try {
    dispatchMethod(MovieActionTypes.CLEAR_MOVIE_DETAILS, [], dispatch);
  } catch (error: any) {
    if (error.response) {
      dispatchMethod(
        MovieActionTypes.SET_ERROR,
        error.response.data.message,
        dispatch,
      );
    }
  }
};
