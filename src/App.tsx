// import Message from "./Message";
// import ListGroup from "./components/ListGroup";
// import ListGroups from "./components/ListGroups";

import Alert from "./components/Alert";


function App() {
  // let items = [
  //   'New York',
  //   'San Francisco',
  //   'Tokyo',
  //   'London',
  //   'Paris'
  // ];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  // return <div><Message /></div>;
  // return <div><ListGroup /></div>;
  // return <div><ListGroups items={items} heading="Cities" onSelectItem={handleSelectItem} /></div>;
  // return <div><Alert text="Hello World" /></div>;
  return (
    <div>
      <Alert>Hello World</Alert>
    </div>
  );
}

export default App;