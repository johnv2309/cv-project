import "./App.scss";
import { About } from "./components/About";
import { Information } from "./components/Information";

export function App() {
  return (
    <div className="App">
      <About />
      <Information />
    </div>
  );
}
