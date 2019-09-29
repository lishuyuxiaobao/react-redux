import React, { Component } from 'react';
import "./citiesSearch.css";
// import { NavBar, Icon } from 'antd-mobile';

class CitiesSearchComponent extends Component {
    render() {
        return (
            <div className="cities-search">
                CitiesSearchComponent
            </div>
        );
    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentDidMount() {
        console.log("搜索界面", this.props.match.params)
    }
}

export default CitiesSearchComponent;