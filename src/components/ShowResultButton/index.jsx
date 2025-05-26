import React from "react";

class ShowResultButton extends React.Component {
  render() {
    return (
      <button
        className="btn btn-secondary"
        type="button"
        onClick={this.props.onClick}
      >
        Show Result
      </button>
    );
  }
}

export default ShowResultButton;
