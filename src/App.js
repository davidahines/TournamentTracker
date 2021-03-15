// -- Bootstrap
import logo from './planeswalker_icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

// -- Components
import RoundsTable from './RoundsTable'

// -- Decks
import decks from './decks';

// -- Config
import config from './config';

// -- Fontawesome
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

// -- React
import React, {useState} from 'react';

// -- Styles
import './App.css';
import TournamentInfoCard from './TournamentInfoCard';

// -- Add Fontawesome objects to library.
library.add(fab, faEdit, faTrashAlt, faPlusSquare)



function App() {
  const [rounds] = useState([]);
  return (
    <div className="container-fluid px-0 App">
      <div className="row">
        <div className="col-md-12">
          <header className="App-header">
            <div>
              <img id="logo" className="float-left" src={logo} alt="Planeswalker Logo" />
              <h1 id="title">Mtg Tracker</h1>
            </div>
            <hr className="w-100 page-width" />
          </header>
          <main className="App-main">
            <div className="tournament-info">
              <TournamentInfoCard rounds = {rounds} opponentDecks = {decks} />
            </div>
            <div className="results">
              <RoundsTable rounds = {rounds} opponentDecks = {decks}/>
            </div>
            <button className="btn btn-light tournament-submit-button">Submit Tournament</button>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
