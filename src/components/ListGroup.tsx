// import { Fragment } from "react";

function ListGroup() {
    // const items = [
    //     'New York',
    //     'San Francisco',
    //     'Tokyo',
    //     'London',
    //     'Paris'
    // ];

    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];
    // items = [];

    // if (items.length === 0)
    //     return (
    //         <>
    //             <h1>List</h1>
    //             <p>No item found</p>
    //         </>
    //     )

    // const message = items.length === 0 ?  <p>No item found</p> : null;

    const getMessage = () => {
        return items.length === 0 ?  <p>No item found</p> : null;
    }

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
            {/* { items.length === 0 ?  <p>No item found</p> : null } */}
            {/* {message} */}
            {getMessage()}
            <ul className="list-group">
                {items.map((item) => (
                    <li 
                        key={item}
                        className="list-group-item"
                        onClick={() => console.log('Clicked')}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;