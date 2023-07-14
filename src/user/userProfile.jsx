import { Link } from "react-router-dom";
import MyProductsAds from "./MyAdsProducts";
function UserProfile() {
    return (
        <>
            <section className="" >
                <div className="container mt-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-112">
                            <div className="card mb-5" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-4"> <a href="#!">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" alt="avatar"
                                        className="img-fluid rounded-circle me-3 mb-2" width="35" />
                                </a>
                                    <span className="mb-3 h3">Muhammad Awais </span>
                                    <p className="small mb-0"><i className="far fa-star fa-lg"></i> <span className="mx-2">|</span> Created by
                                        <strong><span className="text-primary"> O</span><span
                                            className="text-danger">L</span><span className="text-warning">X</span></strong> on 17 June , 2023</p>
                                    <p className="fw-lighter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, magnam doloribus architecto itaque provident quisquam harum expedita saepe nam cum explicabo eveniet laborum, commodi atque minima, fugiat voluptate. Maiores, sequi.</p>
                                    <hr className="my-4" />
                                    <div className="d-flex justify-content-start align-items-center">
                                        <p className="mb-0 "><i className="fas fa-cog me-2"></i> <span
                                            className="text-muted small">Profile Update</span></p>
                                        <Link to="/user/change-password"> <p className="mb-0 "><i className="fas fa-link ms-4 me-2"></i> <span
                                            className="text-muted small">Password Update</span></p></Link>
                                        <p className="mb-0 "><i className="fas fa-ellipsis-h ms-4 me-2"></i> <span
                                            className="text-muted small">Account Varification Detial</span>
                                            <span className="ms-3 me-4">|</span></p>

                                        <button type="button" className="btn btn-outline-dark btn-sm btn-floating">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <MyProductsAds />
                
            </section>
        </>
    );
}
export default UserProfile;