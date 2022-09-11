/* eslint-disable no-shadow */
import React, {useEffect, useRef, useState} from 'react';
import {View, Pressable, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {Banner, Button, Text} from '../../components';
import {deviceWidth, heightToDp} from '../../constants';
import Details from './Details';
import Filters from './Filters';
import styles from './styles';
import config from '../../config';
import {fetchMoreMovies, setCurrentMovie} from '../../redux/actions/action';

const Movies: any = {
  popular: 'Trending',
  now_playing: 'Latest',
  top_rated: 'Most Popular',
  upcoming: 'Upcoming',
};
const Genre = ({
  movieType,
  movieList,
  setCurrentMovie,
  currentPage,
  loadMoreMovies,
}: any) => {
  const [filters, setFilters] = useState([]);
  const [movies, setMovies] = useState(movieList);
  // const [currentMovieId, setCurrentMovieId] = useState(null);
  const filtersRef = useRef<any>();
  const detailsRef = useRef<any>();
  function onPress(movie: any) {
    setCurrentMovie(movie);
    detailsRef.current.open();
  }

  function renderCards(item: any, idx: number) {
    // console.log(item);

    return (
      <Pressable onPress={() => onPress(item)} key={idx}>
        <Banner type="xl" styles={genreStyles.card}>
          <View style={genreStyles.cardContainer}>
            <FastImage
              source={{
                uri: `${config.IMAGE_URL}${item.poster_path}`,
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
              style={genreStyles.imageStyle}
            />
          </View>
          <Text
            type="small"
            content={item.title}
            styles={genreStyles.cardContent}
            // @ts-ignore
            ellipsizeMode="tail"
            numberOfLines={1}
          />
        </Banner>
      </Pressable>
    );
  }

  function loadMore() {
    let pageNumber = currentPage;
    if (currentPage < 10) {
      pageNumber += 1;
      loadMoreMovies(pageNumber, movieType);
    }
  }

  function filtersButtonClick() {
    filtersRef.current.open();
  }

  function onFiltersChange(changedFilters: any) {
    setFilters(changedFilters);
  }

  useEffect(() => {
    if (filters.length > 0 && filters[1] !== null && filters[1] !== 0) {
      const newList = movieList.filter(
        (movie: any) =>
          movie.adult === filters[0] && movie?.genre_ids?.includes(filters[1]),
      );

      setMovies(newList);
    } else {
      setMovies(movieList);
    }
  }, [filters, movieList]);

  return (
    <>
      <View style={[styles.categoriesSection, {top: heightToDp('12%')}]}>
        <Text content={Movies[movieType]} type="body" />
        <Pressable
          onPress={filtersButtonClick}
          style={{top: heightToDp('0.75%')}}>
          <Text content="Filters" type="small" dimmed />
        </Pressable>
      </View>
      <View style={genreStyles.flashListParentView}>
        <ScrollView contentContainerStyle={genreStyles.listViewStyle}>
          {movies?.map((item: any, i: number) => renderCards(item, i))}
          <Button
            buttonText={`Load Page ${currentPage + 1}`}
            onPress={loadMore}
            style={{left: deviceWidth / 6.5, marginTop: heightToDp('17%')}}
          />
        </ScrollView>

        <Filters sheetRef={filtersRef} onFiltersChange={onFiltersChange} />
        <Details sheetRef={detailsRef} />
      </View>
    </>
  );
};

const mapStateToProps = (store: any) => ({
  movieType: store.movies.movieType,
  movieList: store.movies.movies,
  currentPage: store.movies.page,
});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentMovie: (movie: any) => dispatch(setCurrentMovie(movie)),
  loadMoreMovies: (pageNumber: number, type: string) =>
    dispatch(fetchMoreMovies(pageNumber, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Genre);

const genreStyles = StyleSheet.create({
  flashListParentView: {
    height: '100%',
    top: heightToDp('13%'),
  },
  listViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: heightToDp('65%'),
  },
  card: {
    height: heightToDp('25%'),
    width: deviceWidth / 2 - 42,
    marginLeft: 10,
    marginTop: 40,
  },
  imageStyle: {
    height: '99.5%',
    width: '100%',
    borderRadius: 15,
  },
  cardContainer: {
    alignItems: 'center',
  },
  cardContent: {
    marginTop: 10,
  },
});
