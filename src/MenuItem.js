import "./MenuItem.css"
import {deleteMenuItem} from "./axiosClient";

const accessLevel = "ADMIN";

function MenuItem(props) {
    return (
        <div className="menu-item" id={props.id} category={props.category}>
            <div className="menu-item-description">
                <ItemImage image={props.image}/>
                <ItemName name={props.name} />
                <ItemPrice price={props.price} />
                <div className="menu-item-description-more">
                    <ItemWeight weight={props.weight} />
                    <ItemIngredients ingredients={props.ingredients} />
                </div>
            </div>
            <div className="menu-item-addButton">
                <ItemAddToCartButton isAvailable={props.isAvailable} name={props.name}/>
            </div>
            <div className="menu-item-deleteButton">
                <ItemDeleteButton id={props.id}/>
            </div>
        </div>
    )
}

function ItemImage(props) {
    return (
        <img className="ItemImage"
             src={props.image}
             alt={props.alt}
        />
    )
}

function ItemName(props) {
    return <h1>{props.name}</h1>;
}

function ItemPrice(props) {
    return <h1>{props.price.toFixed(2)} USD</h1>;
}

function ItemWeight(props) {
    return <p>{props.weight}g</p>;
}

function ItemIngredients(props) {
    return <p>{props.ingredients}</p>;
}

function ItemAddToCartButton(props) {
    if (props.isAvailable === true) {
        return <button>Add to cart</button>;
    } else {
        return <button disabled>Out of Stock</button>;
    }
}

function ItemDeleteButton(props) {
    if (accessLevel === "ADMIN") {
        return <button onClick={() => deleteMenuItem(props.id)}>Delete Item</button>
    }
}

export default MenuItem;