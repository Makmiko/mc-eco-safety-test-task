import React, { useEffect } from 'react';
import Header from '../layout/Header';
import FilmList from '../layout/FilmList';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilmList, searchFilms } from '../store/actions/filmsActions';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { Link } from 'react-router-dom';

const StyledHeader = styled(Header)`
  margin-bottom: 20px;
`;

const useStyles = makeStyles(() => ({
  films: {
    overflow: 'hidden',
    paddingBottom: 20
  }
}));

export default function FilmsPage({ history, location, match }) {
  const routeProps = { history, location, match };
  const { searchParam = '', page = 1 } = match.params;
  const dispatch = useDispatch();
  const results = useSelector((state) => state.films.searchFilms.totalResults || 0);
  const paginationCount = Math.ceil(results / 10);
  const classes = useStyles();

  useEffect(() => {
    if (searchParam) {
      dispatch(searchFilms(searchParam, page));
    } else {
      dispatch(clearFilmList());
    }
  }, [searchParam, page]);

  return (
    <Grid className={classes.films} justify="center" container>
      <Grid container>
        <StyledHeader {...routeProps}/>
      </Grid>
      <Grid container justify="center">
        <FilmList {...routeProps}/>
      </Grid>
      <Grid container justify="center">
        {
          results ?
            <Pagination
              size="large"
              color="secondary"
              page={+page}
              count={paginationCount}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/films/${searchParam}/${item.page === 1 ? '' : `${item.page}`}`}
                  {...item}
                />
              )}
            /> : null
        }
      </Grid>
    </Grid>
  );
};
