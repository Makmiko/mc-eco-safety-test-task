import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { searchAutocompleteFilms } from '../store/actions/filmsActions';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(() => ({
  searchButton: {
    fontSize: '1.1rem'
  }
}));

export default function SearchBar({history, match}) {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const searchResult = useSelector((state) => state.films.searchAutocompleteFilms.Search || []);
  const dispatch = useDispatch();

  function onSearch(e) {
    setSearch(e.target.value);
    dispatch(searchAutocompleteFilms(e.target.value));
  }

  function onAutocomplete(e, searchParam) {
    e.preventDefault();
    setSearch(searchParam && searchParam.Title);
    history.push(`/films/${searchParam ? searchParam.Title : ''}`);
  }

  function onSubmit(e) {
    e.preventDefault();
    history.push(`/films/${search}`);
  }

  useEffect(() => {
    if (match.params.searchParam) setSearch(match.params.searchParam);
  }, [match.params.searchParam]);

  return (
    <Grid container item justify="flex-end">
      <Grid item xs={10} md={8}>
        <form onSubmit={(e) => onSubmit(e)}>
          <Grid className={classes.searchBar} justify="flex-end" container>
            <Grid item xs={8}>
              <Autocomplete
                inputValue={search || ''}
                onInputChange={onSearch}
                onChange={onAutocomplete}
                options={searchResult}
                getOptionLabel={(option) => (option ? option.Title : false)}
                className={classes.searchField}
                renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      size="small"
                      label="Search"
                      variant="outlined"
                    />
                  )}
                />
            </Grid>
            <Grid item xs={3}>
              <Button
                className={classes.searchButton}
                type="button"
                onClick={onSubmit}
                variant="outlined" color="primary"
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
