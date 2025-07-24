import SwapCard from "./components/SwapCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <SwapCard
        frontContent="Frontend"
        backContent="React • Tailwind • TypeScript"
        width="300px"
        height="200px"
      />
    </div>
  );
}
