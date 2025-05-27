import React from "react";
import SmileCard from "../SmileCard";
class SmileList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-4 list-unstyled">
        {this.props.smiles.map((smile) => (
          <SmileCard
            key={smile.id}
            id={smile.id}
            image={smile.img}
            onVote={this.props.onVote}
            votes={smile.votes}
          />
        ))}
      </ul>
    );
  }
}

export default SmileList;
