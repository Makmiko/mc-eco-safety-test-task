import React from 'react';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import PosterImage from '../components/PosterImage';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  film: {
    color: '#48528C !important',
  },
  poster: {
    display: 'block',
    height: 'auto',
    width: '100%',
  },
  title: {
    width: '80%',
  },
  subTitle: {
    width: '80%',
    textAlign: 'left',
  },
  tableContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  table: {
    width: '80%',
    margin: 0,
  },
  tableCell: {
    color: '#48528C',
  },
  sideInfoContainer: {
    textAlign: 'left',
    lineHeight: '1.7rem',
  },
  sideInfo: {
    width: '80%',
  },
  votes: {
    color: '#7F86AF',
  },
  starring: {
    fontWeight: 700,
  },
  [theme.breakpoints.up('md')]: {
    sideInfo: {
      width: '100%',
    },
  },
}));

export default function Film(props) {
  const classes = useStyles();
  const film = useSelector((state) => state.film.film);
  const filmTable = Object.entries(film)
    .filter(([key, value]) => {
      return (
        key !== 'Year' && key !== 'Title' && key !== 'imdbID'
        && key !== 'imdbRating' && key !== 'Website' && key !== 'Type'
        && key !== 'Response' && key !== 'Ratings' && key !== 'Poster'
        && key !== 'imdbVotes' && value !== 'N/A'
      )
    });
  return (
    <Grid className={`${classes.film} ${props.className}`} justify="center" container>
      <Grid justify="center" container item xs={11}>
        <Grid justify="center" container item xs={12} md={3}>
          <Box>
            <PosterImage
              className={classes.poster}
              posterSrc={film && film.Poster}
            />
          </Box>
        </Grid>
        <Grid justify="center" container item xs={12} md={7}>
          <Box className={classes.title} component="h1">
            {film.Title} ({film.Type} - {film.Year})
          </Box>
          <Box className={classes.subTitle} component="h2">
            About {film.Type}:
          </Box>
          <TableContainer className={classes.tableContainer}>
            <Table className={classes.table} aria-label="customized table">
              <TableBody>
                {filmTable.map((title, index) => (
                  <TableRow key={index}>
                    <TableCell
                      className={classes.tableCell}
                      component="th" scope="row"
                    >
                      {title[0]}
                    </TableCell>
                    <TableCell
                      className={classes.tableCell}
                      align="right"
                    >
                      {title[1]}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid className={classes.sideInfoContainer} justify="center" alignContent="flex-start" container item xs={12} md={2}>
          <Box className={classes.sideInfo}>
            {
              film.imdbRating !== 'N/A' ?
                (<h2>
                Rating: {film.imdbRating}, <span className={classes.votes}>{film.imdbVotes}</span>
              </h2>)
              : null
            }
            <article>
              <span className={classes.starring}>Starring: </span>
              {film.Actors}
            </article>
          </Box>
        </Grid>
        </Grid>
    </Grid>
  );
};
