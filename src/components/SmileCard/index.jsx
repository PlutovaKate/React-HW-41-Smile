function SmileCard() {
  return (
    <li className="list-group-item col-sm-2 mb-3 mb-sm-0 ">
      <div className="card mb-3 ">
        <div className="card-body d-flex align-items-center">
          <img />
        </div>
        <p className="mb-2">Number of votes: </p>
        <button className="btn btn-success btn-sm" type="button">
          Vote
        </button>
      </div>
    </li>
  );
}

export default SmileCard;
