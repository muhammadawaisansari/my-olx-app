import { useState, useEffect } from 'react' //import Hooks
import { json, useParams } from 'react-router-dom' //import useParsm 
import RecommendedProducts from "../RecommendedProducts";
import { Link } from 'react-router-dom';
import DetailPagePlaceHolder from '../../placeholders/detailPagePlaceholder';
function ProductDetailPage() {
  let [products, setProductsDetails] = useState(null)
  let [loading, setLoading] = useState(false)

  // Pass Id 
  const { id } = useParams();


  // Fetch Data From API
  async function fetchProductDetails() {
    setLoading(true)

    try {

      // add product Id in Api
      let response = await fetch(import.meta.env.VITE_PRODUCT_API + `/${id}?populate=*`)
      response = await response.json()
      setProductsDetails(response.data)
    }
    catch (error) {

      error = "Errror is Error"

    }

    setLoading(false)
  }

  useEffect(() => {
    fetchProductDetails(id)
  }, [id])

  // Page Loading
  if (loading && products == null) {
    return (
      <DetailPagePlaceHolder />
    )
  }

  return (

    <>

      {products && (
        <section>
          <div className="container-fluid fontSize14 mt-5">


            <div className="row">


              <aside className="col-lg-6" >{
                products.attributes.productImage.data.map(image => {
                  return (
                    <div className="mb-3 d-flex justify-content-center">
                      <a data-fslightbox="mygalley" className="" target="_blank" data-type="image"
                        href=" ">
                        <img className="detailMainImage"
                          src={`http://localhost:1337${image.attributes.url}`} />
                      </a>
                    </div>
                  )
                })}

                <div className="d-flex justify-content-center mb-3">{
                  products && products.attributes.multipleImages.data.slice(0, 2).map(image => {
                    return (
                      <a data-fslightbox="mygalley" className="mx-1 rounded-2 item-thumb" target="_blank" data-type="image"
                        href=" "
                      >
                        <img width="90" height="80" className="rounded-2"
                          src={`http://localhost:1337${image.attributes.url}`} />
                      </a>
                    )
                  })}

                </div>
              </aside>
              <main className="col-lg-6">
                <div className="ps-lg-3">
                  <h4 className="title text-dark col-10">
                    {products.attributes.productTitle}
                  </h4>  <span className="text-success fw-bolder">{products.attributes.varified}</span>
                  <div className="d-flex flex-row my-3">
                    <div className="text-warning mb-1 me-2">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <span className="ms-1">
                        4.5
                      </span>
                    </div>
                    <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>{products.attributes.availability}</span>

                  </div>

                  <div className="mb-1">
                    <span className="h6 text-muted">{products.attributes.productPrice}</span>
                    <span className="text-muted">/per item</span>
                  </div>
                  <div className="mb-2">
                    <span className="h6 fw-bold text-muted">Location: </span>
                    <span >{products.attributes.location}</span>
                  </div>
                  <p>
                    {products.attributes.productDescription}
                  </p>
                  <p><strong className="fw-bold text-muted">Additional Information: </strong>{products.attributes.additionInformation}</p>
                  <hr />
                  <a href="#" className="btn btn-dark shadow-0 me-2"> Buy now </a>
                  <a href="#" className="btn btn-dark shadow-0"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>

                  <Link to="/sellerDetail" className="btn btn-dark shadow-0 ms-2"> <i className="fa-solid fa-arrow-right"></i> Seller Details </Link>
                </div>
              </main>

            </div>
          </div>
        </section>
      )}


      <RecommendedProducts />

    </>

  );
}
export default ProductDetailPage;
