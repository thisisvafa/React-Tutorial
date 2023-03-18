// import Message from "./Message";
// import ListGroup from "./components/ListGroup";
import ListGroups from "./components/ListGroups";

function App() {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  // return <div><Message /></div>;
  // return <div><ListGroup /></div>;
  return <div><ListGroups items={items} heading="Cities" onSelectItem={handleSelectItem} /></div>;
}

export default App;