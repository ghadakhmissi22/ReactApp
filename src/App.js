import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  // 🌙 Gérer le mode sombre / clair
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => setDarkMode(!darkMode);

  // 🎨 Classe CSS dynamique
  const appClass = darkMode ? 'App dark-mode' : 'App light-mode';

  return (
    <div className={appClass}>
      {/* --- Navbar --- */}
      <Navbar
        bg={darkMode ? 'dark' : 'light'}
        data-bs-theme={darkMode ? 'dark' : 'light'}
        expand="lg"
      >
        <Container className="d-flex justify-content-between align-items-center">
          {/* From Uiverse.io by SelfMadeSystem */}
          <div className="nav">
            <div className="container">
              <div className="btn">Home</div>
              <div className="btn">Contact</div>
              <div className="btn">About</div>
              <div className="btn">FAQ</div>
              <svg
                className="outline"
                overflow="visible"
                width="400"
                height="60"
                viewBox="0 0 400 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="rect"
                  pathLength="100"
                  x="0"
                  y="0"
                  width="400"
                  height="60"
                  fill="transparent"
                  strokeWidth="5"
                ></rect>
              </svg>
            </div>
          </div>

          {/* 🌙 Bouton Dark/Light */}
          <Button
            variant={darkMode ? 'outline-light' : 'outline-dark'}
            onClick={toggleTheme}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </Button>
        </Container>
      </Navbar>

      {/* --- Header --- */}
      <Container className="mt-4 text-center header-box">
        <h1>Top 3 Must-Watch Movies 🍿</h1>
        <p>Discover some of the best movies to enjoy this weekend!</p>
      </Container>

      {/* --- Cartes de films --- */}
      <Container className="mt-5">
        <Row className="justify-content-center">
          {/* Film 1 */}
          <Col md={4} className="mb-4">
            <Card className="movie-card">
              <Card.Img
                variant="top"
                src="https://th.bing.com/th/id/R.7c57993de98d39cbb0196fd5e25eb6c1?rik=1EoYCgYECd6nZw&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f14300000%2fInception-inception-2010-14355477-1680-1050.jpg&ehk=JvWqEHpNZ5hKETO7bGFdRzW8Jid3Mt3sk61wPYdM9Jw%3d&risl=&pid=ImgRaw&r=0"
              />
              <Card.Body>
                <Card.Title>Inception (2010)</Card.Title>
                <Card.Text>
                  A thief who steals secrets through dream-sharing technology is given a chance at redemption.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Film 2 */}
          <Col md={4} className="mb-4">
            <Card className="movie-card">
              <Card.Img
                variant="top"
                src="https://th.bing.com/th/id/R.39505907e9c2b04f66895ee325ad03c0?rik=Z8zTrmDdvEbOUA&pid=ImgRaw&r=0"
              />
              <Card.Body>
                <Card.Title>Interstellar (2014)</Card.Title>
                <Card.Text>
                  A team of explorers travels through a wormhole in space to ensure humanity's survival.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Film 3 */}
          <Col md={4} className="mb-4">
            <Card className="movie-card">
              <Card.Img
                variant="top"
                src="https://soundvapors.com/wp-content/uploads/2020/06/tdk-1024x1024.jpg"
              />
              <Card.Body>
                <Card.Title>The Dark Knight (2008)</Card.Title>
                <Card.Text>
                  When the menace known as the Joker wreaks havoc, Batman must face his toughest challenge yet.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
