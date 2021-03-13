import { ReactComponent } from 'react';
import React from 'react';
import { NavItem } from 'react-bootstrap';

export default class RoundsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOpponentDeck: "",
            selectedMatchResult: "",
            rounds: this.props.rounds
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleOpponentDeckChange = this.handleOpponentDeckChange.bind(this);
        this.handleMatchResultChange = this.handleMatchResultChange.bind(this);
    }

    handleOpponentDeckChange(event) {
        this.setState({ selectedOpponentDeck: event.target.value });
    }

    handleMatchResultChange(event) {
        this.setState({ selectedMatchResult: event.target.value })
    }

    handleAdd(event) {
        alert(this.state.selectedMatchResult + ' against ' + this.state.selectedOpponentDeck);

        let rounds = [...this.state.rounds];
        let round = {}


        rounds.push([this.state.selectedOpponentDeck, this.state.selectedMatchResult])


        this.setState({
            rounds,
            selectedOpponentDeck: '',
            selectedMatchResult: ''
        })
        event.preventDefault();
    }

    render() {
        const rounds = this.props.rounds
        return (
            <div>
                <table className="table table-dark table-striped table-hover results-table main-content-width">
                    <thead>
                        <tr>
                            <th scope="col">Opponent</th>
                            <th scope="col">Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rounds ? <tr><td colSpan="2">No data</td></tr> : null}
                        {rounds.map(round => {
                            return (
                                <tr>
                                    <td>{round.opponentDeck}</td>
                                    <td>{round.result}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div class="card result-card main-content-width">
                    <div class="card-body">
                        <h5 class="card-title result-card-title">Add Match</h5>
                        <div className="input-group mb-3  fixed-width">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="opponentDeckSelect">Opponent Deck</label>
                            </div>
                            <select className="custom-select" id="opponentDeckSelect" onChange={this.handleOpponentDeckChange} >
                                <option value="0">...</option>
                                <option value="1">Izzet Tempo</option>
                                <option value="2">Dimir Rogues</option>
                                <option value="3">Mono Red</option>
                            </select>
                        </div>
                        <div className="input-group mb-3  fixed-width">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="matchResultSelect">Match Result</label>
                            </div>
                            <select className="custom-select" id="matchResultSelect" onChange={this.handleMatchResultChange}>
                                <option value="0">...</option>
                                <option value="1">Win</option>
                                <option value="2">Loss</option>
                                <option value="3">Draw</option>
                            </select>
                        </div>
                        <button id="add-round-button" className="btn btn-dark">Submit Match</button>
                    </div>
                </div>
            </div>
        );
    }
}