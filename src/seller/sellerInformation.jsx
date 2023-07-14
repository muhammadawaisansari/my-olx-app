import Products from "../prodcuts/products/Products";

function SellerInformation() {
    return (
        <>
            <article className=" container ms-5 col-4 mt-5">
                <div className="card-body">
                    <h5 className="card-title ">About seller</h5>
                    <hr />
                    <div className="itemside mb-4">
                        <div className="aside">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />

                            <span className="fw-bold">Muhammad Awais</span>
                        </div>
                    </div>
                    <p className="text-muted">Member since Aug 2021</p>
                    <p>
                        lorem ipsum dolor sit amet, consectetur
                        adipisicing elit, sed do eiusmod tempor ut labore et dolore ipsum
                    </p>
                    <div className="d-flex gap-2 mb-2">
                        <button className="btn w-100 btn-dark" type="button">
                            <i className="me-2 fa fa-phone"></i> +92 3023200840
                        </button>
                    </div>
                </div>
            </article>
            <div className="container col-11 mt-5">
                <hr />
                <Products />
            </div>
        </>
    );
}
export default SellerInformation;