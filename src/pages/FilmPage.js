import React, { useEffect } from 'react';
import Header from '../layout/Header';
import styled from 'styled-components';
import Film from '../layout/Film';
import { useDispatch } from 'react-redux';
import { searchFilmById } from '../store/actions/filmActions';

const StyledHeader = styled(Header)`
  margin-bottom: 20px;
`;
const StyledFilm = styled(Film)`
  padding: 30px;
`;

export default function FilmPage({ history, location, match }) {
  const routeProps = { history, location, match };
  const { id } = match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(searchFilmById(id));
  }, [id]);

  return (
    <div>
      <StyledHeader {...routeProps}/>
      <StyledFilm {...routeProps}/>
    </div>
  );
};
