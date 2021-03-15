import React from 'react';

export default class RoundsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rounds: this.props.rounds,
            opponentDecks: this.props.opponentDecks,
            selectedOpponentDeck: this.props.opponentDecks[0],
            selectedMatchResult: this.props.config.matchStates[0],
        }
        this.handleMatchSubmit = this.handleMatchSubmit.bind(this);
        this.handleOpponentDeckChange = this.handleOpponentDeckChange.bind(this);
        this.handleMatchResultChange = this.handleMatchResultChange.bind(this);
    }

    handleOpponentDeckChange(event) {
        this.setState({ selectedOpponentDeck: this.props.opponentDecks[event.target.selectedIndex]});
    }

    handleMatchResultChange(event) {
        this.setState({ selectedMatchResult:  this.props.config.matchStates[event.target.selectedIndex]});
    }

    handleMatchSubmit(event) {
        let rounds = this.state.rounds;
        let round = {
            opponentDeck: this.state.selectedOpponentDeck,
            result: this.state.selectedMatchResult
        };
        rounds.push(round);

        this.setState({
            rounds: rounds,
        })
        event.preventDefault();
    }

    TableIterator = (props) => {
        if (props.rounds && props.rounds.length > 0) {
            const temp = [];
            Object.keys(props.rounds).forEach((round) => {
                temp.push(
                    <tr>
                        <td><strong className={"result-"+props.rounds[round].result.name+"-color"}>
                            {props.rounds[round].result.name}
                            </strong> vs <em>{props.rounds[round].opponentDeck.name}</em></td>
                    </tr>
                );
            })
            return temp;
        } else {
            return (
                <tr>
                    <td colSpan="2">No data</td>
                </tr>
            );
        }
    }

    OpponentDeckSelect = (props) => {
        if (props.opponentDecks) {
            const temp = [];
            Object.keys(props.opponentDecks).forEach((deck) => {
                temp.push(
                    <option key={deck} value={props.opponentDecks[deck]}>{props.opponentDecks[deck].name}</option>
                );
            })
            return temp;
        } else {
            return (
                <option key="NODECKS" value="NODECKS">No Decks</option>
            );
        }
    }

    MatchResultSelect = (props) => {
        if (props.matchStates) {
            const temp = [];
            Object.keys(props.matchStates).forEach((stateIndex) => {
                temp.push(
                    <option key={stateIndex} value={props.matchStates[stateIndex]}>{props.matchStates[stateIndex].name}</option>
                );
            })
            return temp;
        } else {
            return (
                <option value="NO_STATES">No States</option>
            );
        }
    }



    render() {
        const rounds = this.props.rounds;
        const opponentDecks = this.props.opponentDecks;
        const config = this.props.config;
        return (
            <div>
                <div className="card result-card main-content-width">
                    <div className="card-body">
                        <h3 className="card-title result-card-title">Matches</h3>
                        <table className="table .table-borderless  table-hover results-table ">
                            <thead>
                                {/* <tr>
                                    <th scope="col">Opponent</th>
                                    <th scope="col">Result</th>
                                </tr> */}
                            </thead>
                            <tbody>
                                <this.TableIterator rounds={rounds} />
                            </tbody>
                        </table>
                    </div>

                    <div className="card-body">
                        <h5 className="card-title result-card-title">Add Match</h5>
                        <div className="input-group mb-3  fixed-width">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="opponentDeckSelect">Opponent</label>
                            </div>
                            <select className="custom-select" id="opponentDeckSelect" onChange={this.handleOpponentDeckChange} >
                                <this.OpponentDeckSelect opponentDecks={opponentDecks} />
                            </select>
                        </div>
                        <div className="input-group mb-3  fixed-width">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="matchResultSelect">Result</label>
                            </div>
                            <select className="custom-select" id="matchResultSelect" onChange={this.handleMatchResultChange}>
                                <this.MatchResultSelect matchStates={config.matchStates} />
                            </select>
                        </div>
                        <button id="add-round-button" className="btn btn-dark" onClick={this.handleMatchSubmit}>Add Match</button>
                    </div>
                </div>
            </div>
        );
    }
}