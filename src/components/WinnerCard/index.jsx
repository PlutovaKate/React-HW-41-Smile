import React from "react";

class WinnerCard extends React.Component {
  render() {
    return (
      <div className="card mb-3 text-center">
        <div className="card-body d-flex flex-column align-items-center">
          <img src={this.props.winner.img} width="150px" />
          <p className="mt-3 mb-2">
            {this.props.winner.votes === 0
              ? "Vote for me!"
              : `Number of votes: ${this.props.winner.votes}`}
          </p>
          <button
            onClick={this.props.onClose}
            className="btn btn-danger btn-sm"
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default WinnerCard;
