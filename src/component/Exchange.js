import React, {Component} from "react";
import "../css/Exchange.css"

class Exchange extends Component {

     constructor(props) {
        super(props);
        this.state = {val: '',
                currency: 'EUR',
                error: "",
                result: '0',
                currencies: []};
    }

    handleChangeInput = (e) => {
        this.setState({
            val: e.target.value,
            result: "0",
            error: ""
        });
    };

    handleChangeSelect = (e) => {
        this.setState({
            currency: e.target.value,
            error: ""
        });
    };

    handleOnClick = (e) => {
        if (this.state.val && this.state.currencies && this.state.currency) {
            const selectedCurrency = this.state.currencies.filter(c => c.code === this.state.currency)[0];
            if (!selectedCurrency || !selectedCurrency.mid) {
                this.setState({error: "Cannot connect to NBP..."});
                return;
            }

            const calculated = (this.state.val * selectedCurrency.mid).toFixed(2);

            if (calculated > 0) {
                this.setState({result: calculated});
            } else {
                this.setState({error: "Wrong value..."});
            }
        } else {
            this.setState({error: "Something went wrong..."});
        }
        e.preventDefault();
    };

    componentDidMount() {
        const url = "https://api.nbp.pl/api/exchangerates/tables/A?format=json";
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({currencies: response[0].rates}))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="form">
                <form>
                    <label>Value:</label>
                        <input className="formInput" type="number" aria-label="pln-input" value={this.state.val}
                               placeholder="Please specify value" onChange={this.handleChangeInput} />
                                <div className="inputBox">
                                    <label>Currency:</label>
                                    <select value={this.state.currency} onChange={this.handleChangeSelect}>
                                        {this.state.currencies.map(c => (
                                            <option key={c.code} value={c.code}>
                                                {c.code} - {c.currency}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                        <button onClick={this.handleOnClick} type="submit">Convert</button>
                        <h4>{this.state.currency + ": " + this.state.result}</h4>
                        <h5>{this.state.error}</h5>
                </form>
            </div>
        );
    }
}

export default Exchange;