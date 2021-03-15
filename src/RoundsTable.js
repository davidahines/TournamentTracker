import React from 'react';

export default class RoundsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOpponentDeck: "",
            selectedMatchResult: "",
            rounds: this.props.rounds,
            opponentDecks: this.props.opponentDecks
        }
        this.handleMatchSubmit = this.handleMatchSubmit.bind(this);
        this.handleOpponentDeckChange = this.handleOpponentDeckChange.bind(this);
        this.handleMatchResultChange = this.handleMatchResultChange.bind(this);
    }

    handleOpponentDeckChange(event) {
        this.setState({ selectedOpponentDeck: event.target.value });
    }

    handleMatchResultChange(event) {
        this.setState({ selectedMatchResult: event.target.value })
    }

    handleMatchSubmit(event) {
        alert(this.state.selectedMatchResult + ' against ' + this.state.selectedOpponentDeck);

        let rounds = this.state.rounds;
        let round = {opponentDeck: this.state.selectedOpponentDeck,
            result: this.state.selectedMatchResult};
        rounds.push(round);


        this.setState({
            rounds: rounds,
            selectedOpponentDeck: '',
            selectedMatchResult: ''
        })
        event.preventDefault();
    }

    TableIterator = (props) => {
        if(props.rounds){
            const temp = [];
            Object.keys(props.rounds).forEach((round) => {
                temp.push(
                    <tr>
                        <td>{props.rounds[round].opponentDeck.name}</td>
                        <td>{props.rounds[round].result}</td>
                    </tr>
                );
            })
            return temp;
        }else{
            return (
                <tr>
                    <td colSpan="2">No data</td>
                </tr>
            );
        }
    }

    OpponentDeckSelect = (props) => {
        if(props.opponentDecks){
            const temp = [];
            Object.keys(props.opponentDecks).forEach((deck) => {
                temp.push(
                    <option value={props.opponentDecks[deck]}>{props.opponentDecks[deck].name}</option>
                );
            })
            return temp;
        }else{
            return (
                <option value="NODECKS">No Decks</option>
            );
        }
    }



    render() {
        const rounds = this.props.rounds;
        const opponentDecks = this.props.opponentDecks;
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
                        <this.TableIterator rounds={rounds}/>
                    </tbody>
                </table>
                <div class="card result-card main-content-width">
                    <div class="card-body">
                        <h5 class="card-title result-card-title">Add Match</h5>
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
                                <label className="input-group-text" htmlFor="matchResultSelect">Match Result</label>
                            </div>
                            <select className="custom-select" id="matchResultSelect" onChange={this.handleMatchResultChange}>
                                <option value="0">...</option>
                                <option value="1">Win</option>
                                <option value="2">Loss</option>
                                <option value="3">Draw</option>
                            </select>
                        </div>
                        <button id="add-round-button" className="btn btn-dark" onClick={this.handleMatchSubmit}>Submit Match</button>
                    </div>
                </div>
            </div>
        );
    }
}