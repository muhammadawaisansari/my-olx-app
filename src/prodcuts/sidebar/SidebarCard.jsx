import { Link } from "react-router-dom";
import ProductDetailPage from "../detailPage/ProductDetailPage";
let SidbarProductCard = (props) => {

    let sideproduct = props.props;

    let image = import.meta.env.VITE_BASE_URL + sideproduct.attributes.productImage.data[0].attributes.url;

    // For DetailPage link
    let sidBarDetailLink = `/product/detail/${sideproduct.id}`
    return (
        <>

            <div className="col-lg-4 col-md-6 col-sm-6 mt-3 mb-2" key={sideproduct.id}>
                <Link to={sidBarDetailLink}>
                    <div className="card">

                        <div className="mask">
                            <div className="d-flex justify-content-start align-items-start h-100 m-2">
                                <h6><span className="badge pt-1 bg-warning">{sideproduct.attributes.mask}</span></h6>
                            </div>
                        </div>
                        <img className="productImageHeight"
                            src={image}
                            alt={sideproduct.attributes.productTitle} />


                        <div className="info-wrap border-top ps-3 p-3">
                            <a href="#" className="title text-muted">{sideproduct.attributes.productTitle.substring(0, 35)}</a>

                            <div className="text-muted">
                                <strong className="text-muted">Price: </strong>${sideproduct.attributes.productPrice}
                            </div>
                            <div className="text-muted">
                                <strong className="text-muted">Loction: </strong>{sideproduct.attributes.location}
                            </div>
                            <div className="text-warning mb-1 me-2">
                                <strong className="text-muted">Rating: </strong>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="text-muted small mt-1">
                                <i className="fa-solid fa-truck-fast"></i> {sideproduct.attributes.dilivery}
                            </div>

                            <Link
                                to="#"
                                className="float-end btn btn-dark btn-icon"
                            >
                                <i className="fa fa-shopping-cart"></i>
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default SidbarProductCard