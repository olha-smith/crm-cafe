import MenuItem from "./MenuItem";

function httpGet(theUrl) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false);
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function App() {
    const menuItems = JSON.parse(httpGet('http://localhost:8080/api/v1/menu-items'));

    return (
        <main id="main">
            {
                menuItems.map((item) =>
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
                )
            }
        </main>
    );
}

export default App;
