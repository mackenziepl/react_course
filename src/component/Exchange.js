import React, {Component} from "react";

class Exchange extends Component {
    letterStyle = {
        padding: 10,
        margin: 10,
        fontFamily: "monospace",
        fontSize: 24,
    };
    inputStyle = {
        padding: 2,
        margin: 15,
        fontFamily: "monospace",
        fontSize: 20,
        text: "monospace",
    };

    constructor(props) {
        super(props);
        this.state = {value: '', eur: '0', usd: '0'};

        this.handleChange = this.handleChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleOnClick(event) {
        this.setState({eur: (this.state.value * 4.31).toFixed(2)});
        this.setState({usd: (this.state.value * 3.81).toFixed(2)});
        event.preventDefault();
    }

    render() {
        return (
            <div className="form">
                <form>
                    <label>
                        Kwota:
                        <input className="formInput" type="number" value={this.state.value} style={this.inputStyle} onChange={this.handleChange} />
                    </label>
                    <button onClick={this.handleOnClick} type="submit">Przelicz</button>
                    <h4 style={this.letterStyle}>{"EUR: " + this.state.eur}</h4>
                    <h4 style={this.letterStyle}>{"USD: " + this.state.usd}</h4>
                </form>
            </div>
        );
    }

    convertAmount = () => {
        return (
        <>
        <h4>{"EUR: " + Math.round(this.state.value * 4.31)}</h4>
        <h4>{"USD: " + Math.round(this.state.value * 3.81)}</h4>
        </>
             )
    }
}

export default Exchange;