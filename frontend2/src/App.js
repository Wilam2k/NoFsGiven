import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import socketIO from 'socket.io-client';
import { JoinGame } from "./components/JoinGame";
import { Game } from "./components/Game";

const socket = socketIO.connect('http://localhost:4000');
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/game">game</Link>
          </li>
        </ul>

        <hr />     

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>

          <Route exact path="/" element={<JoinGame />}/>
          <Route path="/game" element={<Game socket={socket} />} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
