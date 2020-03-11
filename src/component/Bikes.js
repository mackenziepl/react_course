import React, {Component} from "react";


class Bikes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bikes: ['Romet', 'Kross']
        }
    }

    render() {
        return (
            <>
                <h2>Tu beda rowery</h2>
                <ul>
                    {this.state.bikes.map(bike => (<li>{bike}</li>))}
                </ul>
                <button onClick={this.addBike}>Dodaj rower</button>

            </>
        )
    }

    addBike = () => {
        this.setState({
                bikes: this.state.bikes.concat('Romet2')
            }
        )
    }
}

export default Bikes;