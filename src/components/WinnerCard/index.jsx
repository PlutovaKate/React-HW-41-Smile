function WinnerCard() {
  return (
    <div className="card mb-3 ">
      <div className="card-body d-flex align-items-center">
        <img />
      </div>
      <p className="mb-2">Number of votes: </p>
      <button className="btn btn-danger btn-sm" type="button">
        Close
      </button>
    </div>
  );
}

export default WinnerCard;
