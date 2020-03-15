import React, {Component} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import '../css/Diet.css';

class Diet extends Component {

    constructor(props) {
        super(props);
        this.state = { rows: [], keys:""}

        this.compareBy.bind(this);
        this.sortBy.bind(this);
    }

    componentDidMount() {
        fetch("data.txt")
            .then(response => response.json())
            .then(response => this.setState({rows: response}))
            .catch(err => console.log(err));
    }

    compareBy(key) {
        return function (a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    }

    sortBy(key) {
        let arrayCopy = [...this.state.rows];
        arrayCopy.sort(this.compareBy(key));
        this.setState({rows: arrayCopy});
    }

    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell onClick={() => this.sortBy('name')}>Dessert (100g serving)</TableCell>
                            <TableCell onClick={() => this.sortBy('calories')} align="right">Calories</TableCell>
                            <TableCell onClick={() => this.sortBy('fat')} align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell onClick={() => this.sortBy('carbs')} align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell onClick={() => this.sortBy('protein')} align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map((row, i) => (
                            <TableRow key={row.objectID}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default Diet;