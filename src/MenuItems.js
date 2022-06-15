import React from 'react';
import axios from "axios";
import MenuItem from "./MenuItem";

const baseURL = "http://localhost:8080/api/v1/menu-items";

export default class MenuItems extends React.Component {
    state = {
        menuItems: []
    }

    componentDidMount() {
        axios.get(baseURL)
            .then(response => {
                const menuItems = response.data;
                this.setState({ menuItems });
            })
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
            </main>
        )
    }
}