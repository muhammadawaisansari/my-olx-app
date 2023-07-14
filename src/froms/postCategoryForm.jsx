import { Link } from "react-router-dom";
function PostCategoryForm() {
    return (
        <>

            <div className="col-lg-2 col-sm-4 col-4 text-center mt-4 ms-5">

                <Link to="/" className="float-start fw-bolder h5 text-center"><i class="fa-solid fa-arrow-left"></i> Back</Link>
            </div>
            <section className="mt-5 mb-5" >
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center h-100 mb-5">
                        <div className=" col-xl-9">
                            <article className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Post your Ads</h5>
                                    <hr />
                                    <p className="mb-2 fw-bolder h6">Include Some Details:</p>
                                    <div className="col-12 mb-3">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                                            <label for="floatingInputGrid">Ad Title</label>
                                        </div>
                                        <p className="ms-1">Mention the key feature of your item (e.g, brnad, model, age, type)</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 mb-3">
                                            <textarea class="form-control" style={{ minHeight: "100px", maxHeight: "220px" }} placeholder="Description a comment here" id="floatingTextarea"></textarea>
                                            <label for="floatingTextarea" className="ms-1">Include conditiion, features and reson for selling.</label>
                                        </div>
                                        <div class="form-floating col-12">
                                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                <option selected>Select Availability</option>
                                                <option value="1">Available</option>
                                                <option value="2">Not Available</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-12 col-6 mb-3 mt-3">
                                            <div className="form-floating"> <input type="text" className="form-control" id="floatingInputGrid" placeholder="name@example.com" /> <label for="floatingInputGrid">Location</label> </div>
                                        </div>
                                        <hr />
                                        <p className="mb-2 fw-bolder h6">Set a Price:</p>
                                        <div className="col-sm-6 col-6 mb-3">
                                            <div className="form-floating"> <input type="text" className="form-control" id="floatingInputGrid" placeholder="name@example.com" /> <label for="floatingInputGrid">Price</label> </div>
                                        </div>
                                        <div class="form-floating col-6">
                                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                <option selected>Select Mask</option>
                                                <option value="1">New</option>
                                                <option value="2">On sale</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-12 mb-3">
                                            <textarea class="form-control" style={{ minHeight: "100px", maxHeight: "220px" }} placeholder="Additionl Inofrmation a comment here" id="floatingTextarea"></textarea>
                                            <label for="floatingTextarea" className="ms-1">Include extra, features and reson for selling.</label>
                                        </div>
                                    </div>
                                    <button className="btn btn-dark me-2">Save</button>
                                    <button className="btn btn-light">Cancel</button>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default PostCategoryForm;