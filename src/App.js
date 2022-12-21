import "./styles.css";
import MainComponent from "./Components/MainComponent";

import Head from "./Components/Head";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Head />
      </header>
      <MainComponent />
    </div>
  );
}

export default App;
