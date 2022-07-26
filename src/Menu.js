import React from 'react';
import {getMenuItems} from "./AxiosClient";
import './Menu.css';
import TagBar from "./TagBar";
import MenuItems from "./MenuItems";

export default class Menu extends React.Component {
    state = {
        menuItems: []
    }

    componentDidMount() {
        getMenuItems().then(menuItems => this.setState({ menuItems }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state !== this.prevState) {
            getMenuItems().then(menuItems => this.setState({ menuItems }))
        }
    }

    render() {
        return (
            <main id="main">
                <TagBar state={this.state} />
                <MenuItems state={this.state} />
            </main>
        )
    }
}
