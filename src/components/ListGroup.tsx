// import { Fragment } from "react";

function ListGroup() {
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    return (
        <>
            <h1>List</h1>
            {/* <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul> */}
            <ul className="list-group">
                {items.map((item) => (
                    <li key={item} className="list-group-item">{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;