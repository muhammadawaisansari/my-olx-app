function Productcart() {
  return (
    <div className="fontSize14">
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Shopping cart </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Model Body Start */}
              <div className="col-lg-12 col-sm-12">
                <div className="">
                  <div className="card-body">
                    <article className="row gy-3 mb-4">
                      <div className="col-lg-6 ">
                        <div className="itemside me-lg-5">
                          <div className="aside">
                            <img src="https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg"
                              className="img-sm border rounded" />
                          </div>
                          <div className="info">
                            <a href="https://bootstrap-ecommerce.com/components.html#" className="title mb-1">GoPro HERO6 4K
                              Action Camera - Black color</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-4 col-6 mt-4">
                        <div className="price-wrap lh-sm">
                          <var className="price h6">$1156.00</var>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-4 col-6">
                        <a href="https://bootstrap-ecommerce.com/components.html#" className="btn btn-outline-secondary">
                          Remove</a>
                      </div>
                      <div className="col-lg col-sm-4">
                      </div>
                      <div className="col-2"></div>
                      <div className="col-8">
                        <hr />
                      </div>
                    </article>
                    <article className="row gy-3 mb-4">
                      <div className="col-lg-6">
                        <div className="itemside me-lg-5">
                          <div className="aside">
                            <img src="https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg"
                              className="img-sm border rounded" />
                          </div>
                          <div className="info">
                            <a href="https://bootstrap-ecommerce.com/components.html#" className="title mb-1">GoPro HERO6 4K
                              Action Camera - Black color</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-4 col-6 mt-4">
                        <div className="price-wrap lh-sm">
                          <var className="price h6">$1156.00</var>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-4 col-6">
                        <a href="https://bootstrap-ecommerce.com/components.html#" className="btn btn-outline-secondary">
                          Remove</a>
                      </div>
                      <div className="col-lg col-sm-4">
                      </div>
                      <div className="col-2"></div>
                      <div className="col-8">
                        <hr />
                      </div>
                    </article>
                    <article className="row gy-3 mb-4">
                      <div className="col-lg-6">
                        <div className="itemside me-lg-5">
                          <div className="aside">
                            <img src="https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg"
                              className="img-sm border rounded" />
                          </div>
                          <div className="info">
                            <a href="https://bootstrap-ecommerce.com/components.html#" className="title mb-1">GoPro HERO6 4K
                              Action Camera - Black color</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-4 col-6 mt-4">
                        <div className="price-wrap lh-sm">
                          <var className="price h6">$1156.00</var>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-4 col-6">
                        <a href="https://bootstrap-ecommerce.com/components.html#" className="btn btn-outline-secondary">
                          Remove</a>
                      </div>
                      <div className="col-lg col-sm-4">
                      </div>
                      <div className="col-2"></div>
                      <div className="col-8">
                        <hr />
                      </div>
                    </article>
                    <article className="row gy-3 mb-4">
                      <div className="col-lg-6">
                        <div className="itemside me-lg-5">
                          <div className="aside">
                            <img src="https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg"
                              className="img-sm border rounded" />
                          </div>
                          <div className="info">
                            <a href="https://bootstrap-ecommerce.com/components.html#" className="title mb-1">GoPro HERO6 4K
                              Action Camera - Black color</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-4 col-6 mt-4">
                        <div className="price-wrap lh-sm">
                          <var className="price h6">$1156.00</var>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-4 col-6">
                        <a href="https://bootstrap-ecommerce.com/components.html#" className="btn btn-outline-secondary">
                          Remove</a>
                      </div>
                      <div className="col-lg col-sm-4">
                      </div>
                      <div className="col-2"></div>
                      <div className="col-8">
                        <hr />
                      </div>
                    </article>
                  </div>
                  <div className="card-body">
                    <p className="mb-0">
                      <i className="me-2  fa fa-truck"></i> Free Delivery
                      within 1-2 weeks
                    </p>
                  </div>
                </div>
              </div>
              {/* Model Body End */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-white" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-secondary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Productcart;