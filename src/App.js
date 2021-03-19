import './App.css';
import People from "./components/people"

function App() {
  return (
    <div className="App">
      <header className="header">
          <h1>The Listmaker 9000 v1</h1>
          <div className="description">
            <p>Welcome to the listmaker 9000! To use, simply click the buttons 
            from the list provided to add to your list. You can also sort alphabetically
            both ascending and descending using the buttons.
            </p>
          </div>
      </header>
      <People/>
    </div>
  );
}

export default App;
