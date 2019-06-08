//Dependencies
import React from 'react';
import TablePrueba from "./Table"
import "./Datatable.css";
import "./button.css";



class Toggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        let a='';
        console.log(this.state.isToggleOn);
         if (this.state.isToggleOn) {
             a = "Datatable"
         }
        return (
            <div className={a}>
                <div className="titleButton">   Click  in button change css
                <button className="Button" onClick = {this.handleClick}> {this.state.isToggleOn ? 'DataTable' : 'ReactTable'}</button>  </div>
                <TablePrueba/>
            </div>
    );
    }
}
export default Toggle;