import MenuItem from "./MenuItem";

function httpGet(theUrl) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false);
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function App() {
    const menuItems = JSON.parse(httpGet('https://edc699c3-6045-4324-9406-69e6cfeb1671.mock.pstmn.io/menu'));

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
