function SizeFillter(params) {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button text-dark bg-light"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#panelsStayOpen-collapseFour"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFour"
          >
            Size
          </button>
        </h2>
        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingThree">
          <div className="accordion-body">
            <input type="checkbox" className="btn-check border justify-content-center" id="btn-check1" checked autocomplete="off" />
            <label className="btn btn-white mb-1 px-1 filter-btn btn-sm m-1" for="btn-check1">XS</label>
            <input type="checkbox" className="btn-check border justify-content-center" id="btn-check2" checked autocomplete="off" />
            <label className="btn btn-white mb-1 px-1 filter-btn btn-sm m-1" for="btn-check2">SM</label>
            <input type="checkbox" className="btn-check border justify-content-center" id="btn-check3" checked autocomplete="off" />
            <label className="btn btn-white mb-1 px-1 filter-btn btn-sm m-1" for="btn-check3">LG</label>
            <input type="checkbox" className="btn-check border justify-content-center" id="btn-check4" checked autocomplete="off" />
            <label className="btn btn-white mb-1 px-1 filter-btn btn-sm m-1" for="btn-check4">XXL</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default SizeFillter