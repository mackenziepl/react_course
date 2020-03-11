import React, {Component} from "react";

class Exchange extends Component {
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
        this.setState({eur: Math.round(this.state.value * 4.31)});
        this.setState({usd: Math.round(this.state.value * 3.81)});
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <label>
                    Kwota:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <button onClick={this.handleOnClick} type="submit">Przelicz</button>
                <h4>{"EUR: " + this.state.eur}</h4>
                <h4>{"USD: " + this.state.usd}</h4>
            </form>
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