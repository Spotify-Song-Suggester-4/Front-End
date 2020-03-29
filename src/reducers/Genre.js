import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const Div = styled.div`
  width: 150px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  margin: 10px;
  text-decoration: none;
`;

const Genre = (props) => {
  return (
    <div>
      <Link to="">
        <Div>{props.genre}</Div>
      </Link>
    </div>
  );
};

export default Genre;
