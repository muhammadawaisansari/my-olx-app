function UpdateUserProfile() {
    return (
        <>
            <section className=" mb-5" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className=" col-xl-9">
                            <article className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Edit Profile</h5>
                                    <hr />
                                    <p className="mb-2 fw-bolder h6">Your Information:</p>
                                    <div className="row">
                                        <div className="col-6 mb-3">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                                                <label for="floatingInputGrid">First Name</label>
                                            </div>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <div className="form-floating">
                                                <input type="date" className="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                                                <label for="floatingInputGrid">Date of Birt</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-8 mb-3">
                                            <div className="form-floating"> <input type="text" className="form-control" id="floatingInputGrid" placeholder="name@example.com" /> <label for="floatingInputGrid">Address</label> </div>
                                        </div>
                                        <div className="col-sm-4 mb-3">                                            <div className="form-floating">
                                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                                <option selected>Gender *</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Perfer not to say</option>

                                            </select>
                                            <label for="floatingSelectGrid"></label>
                                        </div>
                                        </div>
                                        <div className="col-sm-12 col-6 mb-3">                                            <div className="form-floating"> <input type="text" className="form-control" id="floatingInputGrid" placeholder="name@example.com" /> <label for="floatingInputGrid">About</label> </div>
                                        </div>
                                        <hr />
                                        <p className="mb-2 fw-bolder h6">Contact Information:</p>
                                        <div className="col-sm-6 col-6 mb-3">
                                            <div className="form-floating"> <input type="text" className="form-control" id="floatingInputGrid" placeholder="name@example.com" /> <label for="floatingInputGrid">Email</label> </div>
                                        </div>
                                        <div className="col-sm-6 col-6 mb-3">
                                            <div className="form-floating"> <input type="text" className="form-control" id="floatingInputGrid" placeholder="name@example.com" /> <label for="floatingInputGrid">Phone </label> </div>
                                        </div>
                                    </div>
                                    <label className="form-check mb-4">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <span className="form-check-label"> Save this address </span>
                                    </label>
                                    <button className="btn btn-dark">Continue</button>
                                    <button className="btn btn-light">Cancel</button>
                                    <hr className="my-4" />
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default UpdateUserProfile;