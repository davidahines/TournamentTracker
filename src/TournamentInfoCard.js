import React from 'react';

export default class TournamentInfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerDecks: this.props.playerDecks,
            selectedPlayerDeck: null,
            selectedEvent: null
        }
    }

    handlePlayerDeckChange(event) {
        this.setState({ selectedPlayerDeck: event.target.value });
    }

    handleEventChange(event) {
        this.setState({ selectedEvent: event.target.value })
    }

    PlayerDeckSelect = (props) => {
        if (props.playerDecks) {
            const temp = [];
            Object.keys(props.playerDecks).forEach((deckIndex) => {
                temp.push(
                    <option key={deckIndex} value={props.playerDecks[deckIndex]}>{props.playerDecks[deckIndex].name}</option>
                );
            })
            return temp;
        } else {
            return (
                <option value="NODECKS">No Decks</option>
            );
        }
    }

    EventSelect = (props) => {
        if (props.eventTypes) {
            const temp = [];
            Object.keys(props.eventTypes).forEach((eventIndex) => {
                temp.push(
                    <option key={eventIndex} value={props.eventTypes[eventIndex]}>
                        {props.eventTypes[eventIndex].name}
                    </option>
                );
            })
            return temp;
        } else {
            return (
                <option value="NODECKS">No Events</option>
            );
        }
    }

    render() {
        const decks = this.props.playerDecks;
        const config = this.props.config;
        return (
            <div className="card result-card main-content-width">
                <div className="card-body">
                    <h5 className="card-title result-card-title">Tournament</h5>
                    <div>
                        <div className="input-group mb-3  fixed-width">
                            <div className="input-group-prepend" onChange={this.handlePlayerDeckChange}>
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Deck</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01">
                                <this.PlayerDeckSelect playerDecks={decks} />
                            </select>
                        </div>
                        <div className="input-group mb-3  fixed-width" onChange={this.handleEventChange}>
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Event</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01">
                                <this.EventSelect eventTypes={config.eventTypes} />
                            </select>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}