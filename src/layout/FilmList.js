import React from 'react';
import Grid from '@material-ui/core/Grid';
import FilmCard from '../components/FilmCard';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => ({
  filmList: {
    overflowX: 'hidden',
    paddingBottom: 20,
  }
}));

const FilmList = ({films, history}) => {
  const classes = useStyles();

  function selectFilm(id) {
    if (id) history.push(`/film/${id}`);
  }

  return (
      <Grid className={classes.filmList} container item spacing={4} md={11} lg={8}>
        {films.map((film) =>
          <Grid key={film.imdbID} item xs={6} sm={4} lg={3}>
            <FilmCard
              selectFilm={selectFilm}
              {...film}
            />
          </Grid>
        )}
      </Grid>
  );
};

const mapStateToProps = state => ({
  films: state.films.searchFilms && state.films.searchFilms.Search || [],
});



export default connect(mapStateToProps)(FilmList);
