// import Message from "./Message";
// import ListGroup from "./components/ListGroup";
// import ListGroups from "./components/ListGroups";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";


function App() {
  // let items = [
  //   'New York',
  //   'San Francisco',
  //   'Tokyo',
  //   'London',
  //   'Paris'
  // ];

  let i = 0;

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  // return <div><Message /></div>;
  // return <div><ListGroup /></div>;
  // return <div><ListGroups items={items} heading="Cities" onSelectItem={handleSelectItem} /></div>;
  // return <div><Alert text="Hello World" /></div>;

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* <Button color="danger" onClick={() => console.log('clicked '+ i++)}>Hello World</Button> */}
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert> }
      <Button color="danger" onClick={() => setAlertVisibility(true)}>Hello World</Button>
    </div>
  );
}

export default App;