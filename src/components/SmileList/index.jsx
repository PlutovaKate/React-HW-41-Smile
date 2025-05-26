import React from "react";
import SmileCard from "../SmileCard";
class SmileList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="row ">
        {this.props.smiles.map((smile) => (
          <SmileCard key={smile.id} id={smile.id} image={smile.img} />
        ))}
      </ul>
    );
  }
}

export default SmileList;
