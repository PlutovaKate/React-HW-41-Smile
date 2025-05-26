import "./App.css";
import ShowResultButton from "./components/ShowResultButton";
import SmileList from "./components/SmileList";
import WinnerCard from "./components/WinnerCard";

const smiles = [
  { id: 1, smile: "./assets/heart.jpeg", votes: 0 },
  { id: 2, smile: "./assets/love.jpeg", votes: 0 },
  { id: 3, smile: "./assets/ok.jpeg", votes: 0 },
  { id: 4, smile: "./assets/oops.jpeg", votes: 0 },
  { id: 5, smile: "./assets/perfect.jpeg", votes: 0 },
];

console.log(smiles);

function App() {
  return (
    <>
      <div className="container py-4">
        <h1 className="mb-4">Voting for the best smile</h1>
        <SmileList />
        <ShowResultButton />
        <WinnerCard />
      </div>
    </>
  );
}

export default App;
