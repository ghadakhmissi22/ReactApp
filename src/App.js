import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import './App.css'; // 🎨 Import your custom CSS file

function App() {
  // 🌙 Manage dark/light mode
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Apply dynamic CSS class based on theme
  const appClass = darkMode ? 'App dark-mode' : 'App light-mode';

  return (
    <>
      <div className={appClass}>
        {/* --- Navbar --- */}
        <Navbar
          bg={darkMode ? 'dark' : 'light'}
          data-bs-theme={darkMode ? 'dark' : 'light'}
          expand="lg"
        >
          <Container>
            <Navbar.Brand href="#home">🎬 MovieZone</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#movies">Movies</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>

            {/* 🌙 Dark/Light Toggle Button */}
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

        {/* --- Movie Cards --- */}
        <Container className="mt-5">
          <Row className="justify-content-center">
            {/* Movie 1 */}
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

            {/* Movie 2 */}
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

            {/* Movie 3 */}
            <Col md={4} className="mb-4">
              <Card className="movie-card">
                <Card.Img
                  variant="top"
                  src="https://soundvapors.com/wp-content/uploads/2020/06/tdk-1024x1024.jpg"
                />
                <Card.Body>
                  <Card.Title>The Dark Knight (2008)</Card.Title>
                  <Card.Text>
                    When the menace known as the Joker wreaks havoc, Batman must accept one of the greatest tests of his life.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
