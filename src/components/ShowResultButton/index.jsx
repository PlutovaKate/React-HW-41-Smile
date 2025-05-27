import React from "react";

class ShowResultButton extends React.Component {
  render() {
    return (
      <button
        className="btn btn-secondary d-block mx-auto my-4"
        type="button"
        onClick={this.props.onClick}
      >
        Show Result
      </button>
    );
  }
}

export default ShowResultButton;
