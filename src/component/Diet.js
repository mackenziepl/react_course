import React, {Component} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import '../css/Diet.css';
import EnhancedTableHead from "./EnhancedTableHeader";

class Diet extends Component {

    constructor(props) {
        super(props);
        const headCells = [
            {id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)'},
            {id: 'calories', numeric: true, disablePadding: false, label: 'Calories'},
            {id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)'},
            {id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)'},
            {id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)'},
        ];
        this.state = {
            rows: [],
            headCells: headCells,
            order: 'asc',
            orderBy: 'calories',
            selected: [],
            page: 0,
            rowsPerPage: 0
        };
    }

    handleRequestSort = (event, property) => {
        const isAsc = this.state.orderBy === property && this.state.order === 'asc';
        this.setState({order: isAsc ? 'desc' : 'asc'});
        this.setState({orderBy: property});
    };

    handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = this.state.rows.map(n => n.name);
            this.setState({ selected: newSelected } );
            return;
        }
        this.setState({ selected: [] } );
    };

    handleClick = (event, name) => {
        const selectedIndex = this.state.selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(this.state.selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(this.state.selected.slice(1));
        } else if (selectedIndex === this.selected.length - 1) {
            newSelected = newSelected.concat(this.state.selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                this.state.selected.slice(0, selectedIndex),
                this.state.selected.slice(selectedIndex + 1),
            );
        }
        this.setState({ selected: newSelected } );
    };

    stableSort = (array, comparator) => {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map(el => el[0]);
    };

    ascendingComparator = (a, b, orderBy) => {
        if (b[orderBy] < a[orderBy]) {
            return 1;
        }
        if (b[orderBy] > a[orderBy]) {
            return -1;
        }
        return 0;
    };

    getComparator = (order, orderBy) => {
        return order === 'asc'
            ? (a, b) => this.ascendingComparator(a, b, orderBy)
            : (a, b) => -this.ascendingComparator(a, b, orderBy);
    };

    componentDidMount() {
        fetch("data.txt")
            .then(response => response.json())
            .then(response => this.setState({rows: response}))
            .catch(err => console.log(err));
    }

    isSelected = (name) => this.state.selected.indexOf(name) !== -1;

    render() {
        return (
            <div>
                <Table>
                    <EnhancedTableHead
                        numSelected={this.state.selected.length}
                        order={this.state.order}
                        orderBy={this.state.orderBy}
                        onSelectAllClick={this.handleSelectAllClick}
                        onRequestSort={this.handleRequestSort}
                        headCells={this.state.headCells}/>
                    <TableBody>
                        {this.stableSort(this.state.rows, this.getComparator(this.state.order, this.state.orderBy))
                            .map((row, index) => {
                                const isItemSelected = this.isSelected(row.name);
                                const labelId = `enhanced-table-checkbox-${index}`;
                            return (
                                <TableRow
                                    hover
                                    onClick={event => this.handleClick(event, row.name)}
                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.name}
                                    selected={isItemSelected}>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={isItemSelected}
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </TableCell>
                                    <TableCell component="th" scope="row" padding="none">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default Diet;