import React from "react";
import "./App.css";
import ShowResultButton from "./components/ShowResultButton";
import SmileList from "./components/SmileList";
import WinnerCard from "./components/WinnerCard";

const smilesImg = [
  { id: 1, img: "/heart.jpeg" },
  { id: 2, img: "love.jpeg" },
  { id: 3, img: "ok.jpeg" },
  { id: 4, img: "oops.jpeg" },
  { id: 5, img: "smile.jpeg" },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      smileItem: smilesImg.map((smile) => ({ ...smile, votes: 0 })),
      showWinner: false,
    };

    this.showResult = this.showResult.bind(this);
    this.closeResult = this.closeResult.bind(this);
    this.count = this.count.bind(this);
  }

  count(id) {
    const updatedSmileItem = this.state.smileItem.map((smile) =>
      smile.id === id ? { ...smile, votes: smile.votes + 1 } : smile
    );

    this.setState({ smileItem: updatedSmileItem });
  }

  showResult() {
    this.setState({ showWinner: true });
  }

  closeResult() {
    this.setState({ showWinner: false });
  }

  getWinner() {
    return this.state.smileItem.reduce((max, smile) =>
      smile.votes > max.votes ? smile : max
    );
  }

  render() {
    const winner = this.getWinner();
    return (
      <>
        <div className="container">
          <h1 className="mb-4 text-center">Voting for the best smile</h1>
          <SmileList smiles={this.state.smileItem} onVote={this.count} />
          <ShowResultButton onClick={this.showResult} />
          {this.state.showWinner && (
            <WinnerCard onClose={this.closeResult} winner={winner} />
          )}
        </div>
      </>
    );
  }
}

export default App;
