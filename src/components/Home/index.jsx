import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Phone from '../../assets/Phone.svg';

const HomeBody = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  background: linear-gradient(
    180deg,
    rgba(185, 49, 107, 1) 0%,
    rgba(121, 48, 113, 1) 54%,
    rgba(52, 47, 120, 1) 100%
  );

  img {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .container {
    width: 100%;
    max-width: 832px;
    margin: 0 auto;
    padding: 10px 15px;
    color: white;
    z-index: 999;

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 50px;
      margin: 50px 0;
      h1 {
        font-size: 30px;
      }
      a {
        font-size: 20px;
        color: white;
        text-decoration: none;
        margin: 0 20px;
        font-family: ‘Sarabun’, sans-serif;
      }
    }
    .title {
      margin-top: 150px;
      h2 {
        font-size: 80px;
        font-family: ‘Sarabun’, sans-serif;
        font-weight: bold;
        margin: 20px 0;
      }
    }
    .content {
      margin: 50px 0;
      p {
        font-size: 25px;
        margin: 10px 0;
        font-family: ‘Sarabun’, sans-serif;
      }
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

  footer {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%, -50%);
    p {
      color: white;
      font-family: ‘Sarabun’, sans-serif;
    }
  }
`;

export default function Home(props) {
  return (
    <HomeBody>
      <img src={Phone} />
      <main className="container">
        <div className="nav">
          <h1>ReMix</h1>
          <nav>
            <Link>About Us</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </nav>
        </div>
        <div className="title">
          <h2>Better music</h2>
          <h2>is a swipe away.</h2>
        </div>
        <div className="content">
          <p>We’ve put together the music for your ease.</p>
          <p> All you have to do is find the right beat!</p>
        </div>
        <button>Join with Spotify</button>
      </main>
      <footer>
        <p>Remix 2020.</p>
      </footer>
    </HomeBody>
  );
}
