function BrandFillter() {
    return (
        <>
            <div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button text-dark bg-light"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseTwo"
                        >
                            Brands
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo">
                        <div className="accordion-body">
                            <div className="form-check ">
                                <input className="form-check-input " type="checkbox" value="" id="flexCheckChecked1" checked />
                                <label className="form-check-label" for="flexCheckChecked1">Mercedes</label>
                                <span className="badge badge-secondary float-end">120</span>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
                                <label className="form-check-label" for="flexCheckChecked2">Toyota</label>
                                <span className="badge badge-secondary float-end">15</span>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked3" checked />
                                <label className="form-check-label" for="flexCheckChecked3">Mitsubishi</label>
                                <span className="badge badge-secondary float-end">35</span>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked4" checked />
                                <label className="form-check-label" for="flexCheckChecked4">Nissan</label>
                                <span className="badge badge-secondary float-end">89</span>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">Honda</label>
                                <span className="badge badge-secondary float-end">30</span>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">Suzuki</label>
                                <span className="badge badge-secondary float-end">30</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BrandFillter;