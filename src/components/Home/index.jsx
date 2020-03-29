import React from 'react';
import styled from 'styled-components';

const HomeBody = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
    180deg,
    rgba(185, 49, 107, 1) 0%,
    rgba(121, 48, 113, 1) 54%,
    rgba(52, 47, 120, 1) 100%
  );
  .container {
    width: 100%;
    max-width: 832px;
    margin: 0 auto;
    padding: 10px 15px;
    color: white;
    .nav {
      width: 100%;
      height: 50px;
      margin: 50px 0;
      h1 {
        font-size: 22px;
      }
    }
    h2 {
      font-size: 80px;

      margin-top: 65px;
    }
    p {
      font-size: 25px;
      margin: 30px 0;
    }
    button {
      width: 355px;
      height: 55px;
      font-size: 22px;
      color: #203130;
      background-color: #28bd7e;
      border: none;
      font-weight: bold;
      margin: 30px 0;
    }
  }
`;

export default function Home(props) {
  return (
    <HomeBody>
      <main className="container">
        <div className="nav">
          <h1>HeartDrum</h1>
        </div>
        <h2>Better music is a swipe away.</h2>
        <p>
          We’ve put together the music for your ease. <br /> All you have to do
          is find the right beat!
        </p>
        <button>Join with Spotify</button>
      </main>
    </HomeBody>
  );
}
