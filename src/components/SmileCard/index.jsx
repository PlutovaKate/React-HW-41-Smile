import React from "react";
class SmileCard extends React.Component {
  render() {
    return (
      <li className="col">
        <div className="card h-100 text-center">
          <div className="card-body d-flex flex-column align-items-center justify-content-between">
            <img src={this.props.image} width="100px" className="mb-3" />
            <p className="mb-2">Number of votes: {this.props.votes}</p>
            <button
              className="btn btn-success btn-sm mt-auto"
              type="button"
              onClick={() => this.props.onVote(this.props.id)}
            >
              Vote
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default SmileCard;
