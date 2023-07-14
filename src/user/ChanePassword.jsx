function ChnagePassword() {
  return (
    <div className="container-fluid row ">

      <div className=" col-md-12 col-sm-12 mx-3  mt-3">

        <div className="row mt-4  shadow-sm p-4 center col-md-7 col-sm-12 mx-auto shadow-lg p-5">
          <h1 className="h3 mb-3 fw-normal text-decoration-underline">
            <b>Change or reset your password</b>
          </h1>
          <div claasName="col-6 mt-4">
            <div className="form-floating">
              <input
                type="password"
                className="form-control mt-2"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Current Passsword</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control mt-2"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">New Passsword</label>
            </div>
            <div className="mt-3  pe-5 mb-3">
              <h5 className="me-3">Password strength:</h5>
              <div style={{ fontSize: "13px" }}>
                {" "}
                Use at least 8 characters. Don't use a password from another
                site, or something too obvious like your pet's name.
              </div>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control mt-2"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Confirm password</label>
            </div>
            <div>
              <button
                className="w-100 btn btn-lg btn-dark mt-3"
                type="submit"
                style={{ fontSize: "17px" }}
              >
                {" "}
                Update Now{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChnagePassword;
