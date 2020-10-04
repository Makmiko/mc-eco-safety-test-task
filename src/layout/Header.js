import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const useStyles = makeStyles(() => ({
  typography: {
    flex: 1,
    fontSize: '1.4rem',
    textAlign: 'left',
  },
  link: {
    textDecoration: 'none',
    color: '#48528C'
  }
}));

export default function Header({className, history, match}) {
  const classes = useStyles();
  return (
    <AppBar color="secondary" className={className} position="static">
      <Toolbar>
        <Typography className={classes.typography}>
          <NavLink className={classes.link} to="/">
            Home
          </NavLink>
        </Typography>
        <SearchBar match={match} history={history}/>
      </Toolbar>
    </AppBar>
  );
};
