import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import noPoster from '../assets/img/no-poster.jpg';
import PosterImage from './PosterImage';

const useStyles = makeStyles({
  cardActionArea: {
    height: '100%',
    display: 'flex',
    alignContent: 'flex-start',
  },
  card: {
    height: '100%',
    maxWidth: 345,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  cardMedia: {
    minHeight: 300,
    width: 'auto'
  },
  cardImage: {
    display: 'block',
    height: '100%',
    width: '100%',
  },
  cardActions: {
    marginTop: 'auto',
  },
});

export default function FilmCard({ Poster, Title, Year, imdbID, selectFilm }) {
  const classes = useStyles();
  const cardPoster = Poster && Poster !== 'N/A' ? Poster : noPoster;

  return (
    <CardActionArea
      className={classes.cardActionArea}
      onClick={() => selectFilm(imdbID)}
    >
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
        >
          <PosterImage
            className={classes.cardImage}
            posterSrc={cardPoster}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {Title || '-'} ({Year})
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>

  );
}
