import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import SpotifyPlayer from 'react-spotify-player';
import image from '../assets/home-image.jpeg'
import beatstars_image from '../assets/beatstars-logo-2.jpeg'
import Footer from './Footer';
import "../Home.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Home( { scrollToCredits, scrollToBeats } ){
  const creditsRef = useRef(null);
  const beatsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (scrollToCredits && creditsRef.current) {
      creditsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollToCredits]);

  useEffect(() => {
    if (scrollToBeats && beatsRef.current) {
      beatsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollToBeats]);

  return (
    <section>
      <Container fluid className="home-section">
        <Row className="nav-img-row" id="home">
          <Col>
            <img src={image} className="background-image" />
            <p className="name-title">cameronrexx</p>
            <NavBar className="navbar" />
            <a href="https://www.instagram.com/hammycami/" className="a-color">
              <InstagramIcon className="instagram-icon"/>
            </a>
            <a href="https://www.youtube.com/@cameronrexx" className="a-color">
              <YouTubeIcon className="youtube-icon"/>
            </a>
            
          </Col>
        </Row>
        <img src={image} className="opaque-image" />
        <Row className="spotplayer-row" id="credits" ref={creditsRef}>
          <Col>
            <p className="credits-title">credits</p>
            <Container className="spotplayer-col">
              <SpotifyPlayer uri="https://open.spotify.com/playlist/6ev24fFtK5pTunUKO1RLBE?si=76caf818455d4cfd" />
            </Container>
          </Col>
        </Row>
        <Row className="beatstars-row" id="beats" ref={beatsRef}>
          <Col>
          <p className="beats-title">beats</p>
            <Container className="beatstarsplayer-container">
              <iframe src="https://player.beatstars.com/?storeId=139865" className="beatstarsplayer"> -- none -- </iframe>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;