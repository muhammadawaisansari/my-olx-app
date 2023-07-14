import { Link } from "react-router-dom";
function SellCategory() {
    return (
        <>
            <div className="col-3 mt-4 ms-4">
                <ul className="list-group">
                    <Link to="/category/post-product-form"> <li className="list-group-item d-flex   align-items-center">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        A list item
                        <span className="badge bg-primary rounded-pill ms-4 me-2">14</span>
                        <i className="fa-solid fa-arrow-right-long mt-1"></i>
                    </li>
                    </Link>
                </ul>
            </div>
        </>
    );
}
export default SellCategory;