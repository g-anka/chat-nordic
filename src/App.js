import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Container} from "react-bootstrap"
import Chats from './routes/Chats'
import Chat from './routes/Chat'
import './App.css';
import { Wrapper } from "@googlemaps/react-wrapper"
import Main from "./routes/Main"

function App() {
  return (
      <Wrapper apiKey="AIzaSyBEWfYnG7bYhE2NUEvCyKs5j_2-a4LGmgE">
          <Container>
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="chats" element={<Chats />} >
                      <Route path=":chatId" element={<Chat />} />
                  </Route>
              </Routes>
          </Container>
      </Wrapper>
  );
}

export default App;
