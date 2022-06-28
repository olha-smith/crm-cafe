import React from 'react';
import MenuItem from "./MenuItem";
import {addMenuItem, getMenuItems} from "./axiosClient";


export default class MenuItems extends React.Component {
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
                { this.state.menuItems.map((item) =>
                    <MenuItem key={item.id}
                              image={item.image}
                              name={item.name}
                              price={item.price/100}
                              weight={item.weight}
                              ingredients={item.ingredients}
                              isAvailable={item.isAvailable}
                              id={item.id}
                              category={item.category}
                    />
                )}
                <button onClick={addMenuItem}>Add MenuItem</button>
            </main>
        )
    }
}