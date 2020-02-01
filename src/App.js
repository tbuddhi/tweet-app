import React from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap';
import EmbedTweet from './components/EmbedTweet';
import TweetContent from './components/TweetContent';
// import Firebase from 'firebase'
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

function App() {
  
  return (
    <div className="TweetApp App">
      <header className="page-heading">
        <h1>Twitter App</h1>
      </header>
      <div className="container">
        <Row>
          <Col>
            <div className="login-area">
              Login Area
            </div>
          </Col>
          <Col>
            <div>
              Post Area
              <TweetContent />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
