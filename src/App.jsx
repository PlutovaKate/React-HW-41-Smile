import React from "react";
import "./App.css";
import ShowResultButton from "./components/ShowResultButton";
import SmileList from "./components/SmileList";
import WinnerCard from "./components/WinnerCard";

const smilesImg = [
  { id: 1, img: "../public/heart.jpeg" },
  { id: 2, img: "../public/love.jpeg" },
  { id: 3, img: "../public/ok.jpeg" },
  { id: 4, img: "../public/oops.jpeg" },
  { id: 5, img: "../public/smile.jpeg" },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      smileItem: smilesImg.map((smile) => ({ ...smile })),
      showWinner: false,
    };

    this.showResult = this.showResult.bind(this);
    this.closeResult = this.closeResult.bind(this);
  }

  showResult() {
    this.setState({ showWinner: true });
  }

  closeResult() {
    this.setState({ showWinner: false });
  }

  render() {
    return (
      <>
        <div className="container py-4">
          <h1 className="mb-4">Voting for the best smile</h1>
          <SmileList smiles={this.state.smileItem} />
          <ShowResultButton onClick={this.showResult} />
          {this.state.showWinner && <WinnerCard onClose={this.closeResult} />}
        </div>
      </>
    );
  }
}

export default App;
