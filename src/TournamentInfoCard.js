import React from 'react';

export default class TournamentInfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    updateMessage(event) {
        this.setState({
            message: event.target.value
        })
    }

    render() {
        return (
            <div class="card result-card main-content-width">
                <div class="card-body">
                    <h5 class="card-title result-card-title">Tournament</h5>
                    <div>
                    <div className="input-group mb-3  fixed-width">
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
                        <div className="input-group mb-3  fixed-width">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Event</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01">
                                <option value="0">...</option>
                                <option value="1">Friday Night Magic</option>
                                <option value="2">PPTQ</option>
                                <option value="3">Pro Tour</option>
                            </select>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}