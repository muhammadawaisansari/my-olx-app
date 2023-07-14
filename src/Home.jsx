import Categories from './category/categories';
import Products from './prodcuts/products/Products';
import { useState } from 'react';
function HomePage() {
  
  return (
    <>
      <header>
        {/* Hero Section Start */}
        <div className="d-lg-flex position-relative">
          <div
            className="container mt-5">
            <div className="row">
              <div className='col-2'></div>
              <div className="col-lg-10 col-xl-10 col-sm-6 mt-5">
                <div className="mb-5">
                  <h1 className="display-4  text-dark mb-3">
                    Turn your ideas into a

                    <span className="text-primary text-highlight-warning  ms-3">
                      future & success
                    </span>
                  </h1>

                  <p className="lead">
                    Front's feature-rich designed demo pages help you create the
                    best possible product.
                  </p>
                </div>

                <div className="d-grid d-sm-flex gap-3">
                  <a
                    className="btn btn-dark"
                    href="./page-login-simple.html"
                  >Get started</a
                  >
                  <a className="btn text-decoration-none" href="#"
                  >Learn more <i className="bi-chevron-right small ms-1"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-xl-6 col-sm-6 mt-4"
          >
            <img style={{ clipPath: "ellipse(50% 70% at 70% 50%)" }}
              src="https://www.dreamhost.com/blog/wp-content/uploads/2019/06/afa314e6-1ae4-46c5-949e-c0a77f042e4f_DreamHost-howto-prod-descrips-full.jpeg" />
          </div>
        </div>
        {/* Hero Section End */}

        {/* Feature Section Start */}
        <section className='mt-5 mb-5'>
          <div className="container-fluid fontSize14">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-1 mt-1 ">
                <article className="card card-body border">
                  <div className="text-center mx-lg-4">
                    <span className="rounded-circle text-danger icon-lg bg-secondary-light fw-bold h3">
                      <i className="fa fa-star"></i>
                    </span>
                    <div className="pt-3">
                      <h6 className="fw-bold h6">Vocational Training</h6>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-lg-3 col-md-6 mb-1 mt-1">
                <article className="card card-body border">
                  <div className="text-center mx-lg-4">
                    <span className="rounded-circle text-warning icon-lg bg-warning-light fw-bold h3">
                      <i className="fa fa-thumbs-up"></i>
                    </span>
                    <div className="pt-3">
                      <h6 className="fw-bold h6">Creative Strategy</h6>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-lg-3 col-md-6 mb-1 mt-1">
                <article className="card card-body border ">
                  <div className="text-center mx-lg-4">
                    <span className="rounded-circle text-info icon-lg bg-secondary-light fw-bold h3">
                      <i className="fa fa-box"></i>
                    </span>
                    <div className="pt-3">
                      <h6 className="fw-bold h6">Experienced Teachers</h6>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-lg-3 col-md-6 mb-1 mt-1">
                <article className="card card-body border">
                  <div className="text-center mx-lg-4">
                    <span className="rounded-circle text-secondary icon-lg bg-secondary-light fw-bold h3">
                      <i className="fa fa-box"></i>
                    </span>
                    <div className="pt-3">
                      <h6 className="fw-bold h6">Experienced Teachers</h6>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* Feature Section End */}

        {/* Categories Start */}
        <Categories />
        {/* Categories End */}

        {/* Product Search Start */}
        <div className="container-fulid mt-4 fontSize14">
          <div className="col-sm-12 col-lg-12">
            <div className="bg-primary p-5 searchBanner" style={{ backgroundImage: `url("../src/assets/images/search.jpg")` }}>
              <header className="text-center mt-5">
                <h2 className="text-white ">Buy Your Prodcts online now</h2>
                <p className="text-white">
                  Discover the best food and drinks in your area
                </p>
              </header>
              <form className="mx-auto w-50 mb-3 mt-3 col-sm-12">
                <div className="row g-2 w-100">
                  <div className="col flex-grow">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="floatingPassword" placeholder="Search Your Product" />
                      <label for="floatingPassword">Search Your Product</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Product Search End */}

        {/* Products Section Start */}
        <Products />
        {/* Product Section End */}

        {/* Banner Section Start */}
        <section className="pt-3 fontSize14">
          <div className="container-fluid">
            <div className="row gx-3">
              <main className="col-lg-9 mb-2">
                <div className="card-banner p-5 bg-secondary" style={{
                  backgroundImage:
                    `url("https://img.freepik.com/free-photo/cyber-monday-retail-sales_23-2148688493.jpg?w=996&t=st=1687017669~exp=1687018269~hmac=31e629a293cbfb85aaf25af52239fc9ba52220dc37864b83a7c97fbc62c958fc")`
                }}>
                  <div className="p-4">
                    <h2 className="text-dark fw-bolder">
                      <span className="text-highlight-warning text-primary"> Great products with</span> <br />
                      best deals
                    </h2>
                    <p className="text-dark col-7">No matter how far along you are in your sophistication as an amateur
                      astronomer,
                      there is always one.</p>
                    <a href="#" className="btn btn-dark shadow-0"> View more </a>
                  </div>
                </div>
              </main>
              <aside className="col-lg-3 mb-2">
                <div className="card-banner h-100 bg-secondary" style={{
                  backgroundImage:
                    `url("https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688506.jpg?t=st=1686993231~exp=1686993831~hmac=43337ea2259c2b5bfbf3ab05d612e3a37e8046615488883e92ec055bf3595209")`
                }}>
                  <div className="card-body text-center pb-5">
                    <h5 className="pt-5 text-white fw-bold">Amazing Gifts</h5>
                    <p className="text-white col-11">No matter how far along you are in your sophistication</p>
                    <a href="#" className="btn btn-light"> View more </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
        {/* Banner Section End */}

        {/* News section Start */}
        <section >
          <div className="container mt-4">
            <div className="row">
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(1).webp"
                    className="w-100" />
                  <a href="#!">
                    <div className="mask" >
                      <div className="d-flex justify-content-start align-items-start h-100">
                        <h5><span className="badge bg-light pt-2 ms-3 mt-3 text-dark">$1223</span></h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div className="mask" ></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(2).webp"
                    className="w-100" />
                  <a href="#!">
                    <div className="mask" >
                      <div className="d-flex justify-content-start align-items-start h-100">
                        <h5><span className="badge bg-light pt-2 ms-3 mt-3 text-dark">$239</span></h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div className="mask" ></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(3).webp"
                    className="w-100" />
                  <a href="#!">
                    <div className="mask" >
                      <div className="d-flex justify-content-start align-items-start h-100">
                        <h5><span className="badge bg-light pt-2 ms-3 mt-3 text-dark">$147</span></h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div className="mask" ></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="bg-image hover-zoom ripple shadow-1-strong rounded ripple-surface">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp"
                    className="w-100" />
                  <a href="#!">
                    <div className="mask" >
                      <div className="d-flex justify-content-start align-items-start h-100">
                        <h5><span className="badge bg-light pt-2 ms-3 mt-3 text-dark">$83</span></h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div className="mask" ></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp"
                    className="w-100" />
                  <a href="#!">
                    <div className="mask" >
                      <div className="d-flex justify-content-start align-items-start h-100">
                        <h5><span className="badge bg-light pt-2 ms-3 mt-3 text-dark">$106</span></h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div className="mask" ></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(6).webp"
                    className="w-100" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-start h-100">
                        <h5><span className="badge bg-light pt-2 ms-3 mt-3 text-dark">$58</span></h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div className="mask"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* News section End */}

      </header>
    </>
  );
}

export default HomePage;