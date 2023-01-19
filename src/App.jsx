import "./App.css";
import Navigation from "./components/Navigation";
import Content from "./components/Content";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Content />
      <div className="floor"></div>
    </div>
  );
}

export default App;
