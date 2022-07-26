import "./TagBar.css"

function TagBar(props) {
    let listOfTags = props.state.menuItems.map((item) => item.category)
    return (
        <div className="tag-bar">
            {[...new Set(listOfTags)].map((category) =>
                <Tag key={category} name={category} />)}
        </div>
    )
}

function Tag(props) {
    return (
        <button className="tag">{props.name}</button>
    )
}

export default TagBar;
