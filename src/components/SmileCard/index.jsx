import React from "react";
class SmileCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.count = this.count.bind(this);
  }

  count() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <li className="list-group-item col-sm-2 mb-3 mb-sm-0 ">
        <div className="card mb-3 ">
          <div className="card-body d-flex align-items-center">
            <img src={this.props.image} width="100px" />
          </div>
          <p className="mb-2">Number of votes: {this.state.counter}</p>

          <button
            onClick={this.count}
            className="btn btn-success btn-sm"
            type="button"
          >
            Vote
          </button>
        </div>
      </li>
    );
  }
}

export default SmileCard;
