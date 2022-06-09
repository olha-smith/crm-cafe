import MenuItem from "./MenuItem";

function httpGet(theUrl) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false);
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function App() {
    const menuItems = JSON.parse(httpGet('https://edc699c3-6045-4324-9406-69e6cfeb1671.mock.pstmn.io/menu'));
    const firstItem = menuItems[0];

    return (
        <main id="main">
            <MenuItem image={firstItem.image}
                        name={firstItem.name}
                        price={firstItem.price/100}
                        weight={firstItem.weight}
                        ingredients={firstItem.ingridients}
                        isAvailable={firstItem.isAvailable}
                        id={firstItem.id}
                        category={firstItem.category}
            />

        </main>
    );
}

export default App;
