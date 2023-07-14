function FilterPlaceholder() {
  return (
    <div className="col-lg-12 col-md-6 col-sm-6 mt-3 mb-2">
      <div className="card" aria-hidden="true">
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
            <span className="placeholder col-1 float-end"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-12"></span>
            <span className="placeholder col-11"></span>
            <span className="placeholder col-12"></span>
            <span className="placeholder col-7"></span>
            <span className="placeholder col-9"></span>
            <span className="placeholder col-10"></span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default FilterPlaceholder