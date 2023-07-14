import { Link } from "react-router-dom"

function Signup() {

  return (
    <>
      <section className="vh-100 " >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className=" col-xl-5">
              <form className="center mx-auto shadow-lg p-5">
                <h1 className="h3 mb-3 fw-normal text-decoration-underline "><b>Sign Up</b></h1>
                <p>Stay updated on your professional world</p>
                <div className="form-floating">
                  <input type="email" className="form-control mt-2" id="floatingPassword" placeholder="Password" />
                  <label for="floatingPassword">Your email</label>
                </div>
                <div className="form-floating">
                  <input type="password" className="form-control mt-2" id="floatingPassword" placeholder="Password" />
                  <label for="floatingPassword">Your password</label>
                </div>

                <button className="w-100 btn btn-lg btn-dark mt-3" type="submit" style={{ fontSize: "17px" }}> Sign Up</button>
              </form>
              <div className="text-center mt-4">
                <p>Already to Tesstract-Cube ? &nbsp;<Link className="text-muted" to="/user/signin" style={{ textDecoration: "none" }}>Login Now</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )

}


export default Signup