// -- Bootstrap
import logo from './mtg_logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.js';

// -- Fontawesome
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// -- Styles
import './App.css';

// -- Add Fontawesome objects to library.
library.add(fab, faEdit, faTrashAlt, faPlusSquare)

function App() {
  return (
    <div className="container-fluid px-0 App">
      <div className="row">
        <div className="col-md-12">
          <header className="App-header">
            <img className="img-fluid w-100" src={logo} alt="Planeswalker Logo"/>
            <h1>Friday Night Magic Tracker</h1>
          </header>
          <main className="App-main">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Rounds</label>
              </div>
              <input className="form-control fixed-width" type="text" id="tournament_rounds" name="tournament_rounds" placeholder="Enter Rounds"/>
            </div>
            <div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Deck Played</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01">
                    <option value="0">...</option>
                    <option value="1">Izzet Tempo</option>
                    <option value="2">Dimir Rogues</option>
                    <option value="3">Mono Red</option>
                  </select>
              </div>
            </div>
            <div className="results">
              <table className="table table-dark table-striped table-hover results-table">
                <thead>
                  <tr>
                    <th scope="col" colSpan="6">Results <FontAwesomeIcon icon="plus-square"/></th>
                  </tr>
                  <tr>
                    <th scope="col">Round</th>
                    <th scope="col">Deck</th>
                    <th scope="col">W</th>
                    <th scope="col">L</th>
                    <th scope="col">D</th>
                    <th scope="col">-</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Dimir Rogues</td>
                    <td>0</td>
                    <td>2</td>
                    <td>0</td>
                    <td>
                      <FontAwesomeIcon icon="edit"/>
                      &nbsp;
                      <FontAwesomeIcon icon="trash-alt"/>
                      &nbsp;
                      
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="btn btn-dark">Submit</button>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
