import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "../Home.jsx";
import ProductDetailPage from "../prodcuts/detailPage/ProductDetailPage.jsx";
import SideBar from "../prodcuts/sidebar/SideBar.jsx";
import Productcart from "../prodcuts/components/Cart.jsx";
import NoMatch from "../errors/NoMatch.jsx";
import Signup from "../user/SignUp.jsx";
import Signin from "../user/SignIn.jsx"
import ChnagePassword from "../user/ChanePassword.jsx";
import UserProfile from "../user/userProfile.jsx";
import SellerInformation from "../seller/sellerInformation.jsx";
import SellCategory from "../category/sellCategory/PostCategory.jsx";
import UpdateUserProfile from "../froms/updateProfileForm.jsx";
import PostCategoryForm from "../froms/postCategoryForm.jsx";
import MyProductsAds from "../user/MyAdsProducts.jsx";
import SellProductsAds from "../user/sellProdcuts.jsx";
import BuyProductsAds from "../user/BuyProducts.jsx";
import AllCategories from "../category/AllCategories.jsx";

function Header() {
  return (
    <BrowserRouter>
      <div className="fontSize14">
        <header>

          <div className="p-3 text-center bg-white border-bottom mb-2 ">
            <div className="container">
              <div className="row gy-3">
                <div className="col-lg-2 col-sm-4 col-4 text-center">
                  <Link to="/" className="float-start fw-bolder h3 text-center"><span className="text-primary">O</span><span
                    className="text-danger">L</span><span className="text-warning">X</span></Link>
                </div>
                <div className="order-lg-last col-lg-5 col-sm-8 col-8">
                  <div className="d-flex float-end">
                    <Link to="/products"
                      className="me-1 text-dark active fw-bold rounded py-1 px-3 nav-link d-flex align-items-center">
                      <p className="d-none d-md-block mb-0">Products</p>
                    </Link>
                    <Link to="#"
                      className="me-1 text-dark fw-bold rounded py-1 px-3 nav-link d-flex align-items-center">
                      <p className="d-none d-md-block mb-0">Our services</p>
                    </Link>
                    <a href="#" className="me-1 text-dark fw-bold rounded py-1 px-3 nav-link d-flex align-items-center">
                      <p className="d-none d-md-block mb-0">Help</p>
                    </a>
                    <Link to="#"
                      className="me-1 text-dark active fw-bold rounded py-1 px-3 nav-link d-flex align-items-center">
                      <p className="d-none d-md-block mb-0">Blog</p>
                    </Link>
                    <a href="#" className="me-1 text-dark fw-bold rounded py-1 px-3 nav-link d-flex align-items-center">
                      <p className="d-none d-md-block mb-0">Contact</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light fontSize14 ">
            <div className="container-fluid">
              <button className="navbar-toggler px-0" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#navbarExample2" aria-controls="navbarExample2" aria-expanded="false"
                aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarExample2">
                <ul className="navbar-nav me-auto ps-lg-0 nav justify-content-center">
                  <li className="nav-item dropdown position-static">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                      data-mdb-toggle="dropdown" aria-expanded="false">
                      All Categories
                    </a>
                    <div className="dropdown-menu w-100 mt-0" aria-labelledby="navbarDropdown fontSize14">
                      <div className="container">
                        <div className="row my-4">

                          <AllCategories />


                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Mobile Phone</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Cars</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Houses</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Tv-Video-Audio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Tablets</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Laptop</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Servcies</a>
                  </li>

                </ul>
                <div className="order-lg-last col-lg-5 col-sm-8 col-8 me-5">
                  <div className="d-flex float-end">
                    <div className="dropdown me-2">
                      <a href="#" className="d-flex align-items-center text-muted  fw-bolder text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        User
                      </a>
                      <ul className="dropdown-menu">


                        <li className="ms-3 text-dark m-3">
                          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                          <span className="h6 fw-bolder"><Link to="user/user-profile"> Muhammad Awais</Link></span>
                          <li>
                            <Link to="user/updateuserprofile" className=" text-dark ms-4 text-decoration-underline" type="button">
                              view and edit your profile</Link>
                          </li>
                        </li>
                        <li>
                          <Link to="user/my-products" className="dropdown-item text-dark" type="button"><i className="fa-brands fa-slack me-2"></i>
                            My Ads</Link>
                        </li>
                        <li>
                          <Link to="user/buy-products" className="dropdown-item text-dark" type="button"><i className="fa-brands fa-slack me-2"></i>
                            Buy business packages</Link>
                        </li>
                        <li>
                          <Link to="/user/sell-products" className="dropdown-item text-dark" type="button"><i className="fa-brands fa-slack me-2"></i>
                            Bought packages & billing</Link>
                        </li>
                        <li>
                          <Link to="user/signin" className="dropdown-item text-dark" type="button">
                            <i className="fa-solid fa-right-to-bracket me-2"></i> Login</Link>
                        </li>
                        <li>
                          <Link to="user/signup" className="dropdown-item text-dark" type="button">
                            <i className="fa-solid fa-right-to-bracket me-2"></i> Register</Link>
                        </li>
                        <li>
                          <Link to="user/change-password" className="dropdown-item text-dark" type="button">
                            <i className="fa-solid fa-right-to-bracket me-2"></i>change Password</Link>
                        </li>
                        <li><Link className="dropdown-item" to="user/user-profile"><i className="fa-solid fa-user me-2"></i>Setting</Link></li>

                        <li><hr /></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                      </ul>
                    </div>

                    <a type="button"
                      className="btn btn-light me-1 text-muted fw-bold rounded py-1 px-3 nav-link d-flex align-items-center"
                      data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <p className="d-none d-md-block mb-0 fontSize14">My cart</p>
                      <i className="fas fa-shopping-cart m-1 me-md-2"></i>

                    </a>
                    <Link to="category/post" className="fw-bolder text-muted mt-1"> Sell <i className="fa-solid fa-arrow-right-long"></i></Link>

                    {/* Cart Component Start*/}
                    <Productcart />
                    {/* Cart Component End */}


                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path='/product/detail/:id' element={<ProductDetailPage />} />
        <Route path="/products" element={<SideBar />} />
        <Route path="product/cart" element={<Productcart />} />
        <Route path="user/sign-up" element={<Signup />} />
        <Route path="user/signin" element={<Signin />} />
        <Route path="user/change-password" element={<ChnagePassword />} />
        <Route path="user/user-profile" element={<UserProfile />} />
        <Route path="user/updateuserprofile" element={<UpdateUserProfile />} />
        <Route path="sellerDetail" element={<SellerInformation />} />
        <Route path="category/post" element={<SellCategory />} />
        <Route exact path="category/post-product-form" element={<PostCategoryForm />} />
        <Route exact path="user/buy-products" element={<BuyProductsAds />} />
        <Route exact path="user/sell-products" element={<SellProductsAds />} />
        <Route exact path="user/my-products" element={<MyProductsAds />} />


        <Route path="*" element={<NoMatch />} />
      </Routes>

    </BrowserRouter>

  );
}
export default Header;