import "./App.css";
import ItemList from "./components/ItemList";

function App() {
  let items = ["Pen", "Marker", "Book", "Pencil"];
  return (
    <div className="App">
      <ItemList items={items} heading="Item List" />
    </div>
  );
}

export default App;
