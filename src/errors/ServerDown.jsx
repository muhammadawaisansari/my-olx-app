import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
export default function ServerDown() {
    return (
        <>
            <div className="container fontSize14">
                <div className="row">
                    <div className="col-md-8 col-sm-12 mx-auto m-5">
                        <Link to="/" className=" px-2 h3 fw-bold">
                            <span className="text-primary">O</span><span
                                className="text-danger">L</span><span className="text-warning">X</span>
                        </Link>
                        <p className="ms-5 mt-3"><span className="text-dark fw-bold fs-5 mt-4">500.</span>That's an error.</p>
                        <p className="text-dark fs-7 ms-5">Server temporary unavailable.<br /><span className="text-muted ">Contact with <span className="fw-bolder">info@olxClone.com</span> to get more information.</span></p>
                    </div>
                    <div className="col-md-4 col-sm-12 mb-5">
                        <div className="mx-auto text-center">
                            <img className="animate" style={{ width: "300px" }} src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Cloud_Incomplete-1024.png" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}