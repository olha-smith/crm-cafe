import MenuItem, {ItemCreateButton} from "./MenuItem";

function MenuItems(props) {
    return (
        <div className="menu-items">
            { props.state.menuItems.map((item) =>
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

            <div className="menu-item-createButton">
                <ItemCreateButton />
            </div>
        </div>
        )
}

export default MenuItems;
