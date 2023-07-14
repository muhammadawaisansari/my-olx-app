import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
export default function NoMatch() {
  return (
    <>
      <div className="container fontSize14">
        <div className="row">
          <div className="col-md-7 col-sm-12 mx-auto m-5">
            <Link to="/" className=" px-2 h3 fw-bold">
              <span className="text-primary">O</span><span
                className="text-danger">L</span><span className="text-warning">X</span>
            </Link>
            <p className="ms-5 mt-3"><span className="text-dark fw-bold fs-5 mt-4">404.</span>That's an error.</p>
            <p className="text-dark fs-7 ms-5">Your client has issued a malformed or ilegal request.<br /><span className="text-muted ">That's all we know.</span></p>
          </div>
          <div className="col-md-5 col-sm-12 mt-2">
            <div className="mx-auto text-center">
              <img className="animate" src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=826&t=st=1687019482~exp=1687020082~hmac=f5465dfb900d8d9d1829ec75027290ad9fdf9030567d7cf422e490f374ad7347" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}