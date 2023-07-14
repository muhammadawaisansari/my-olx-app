import { useState, useEffect } from 'react'
import ProductCardPlaceholder from '../placeholders/ProductCardPlaceholder'

function RecommendedProducts() {
  let [products, setproducts] = useState([])
  let [loading, setLoading] = useState(false)

  // For Pagination
  let [pageIndex, setPageIndex] = useState(1)
  let [pages, setPages] = useState([])

  // Setting Pagination
  function pagination(pages) {
    let pageList = [];
    for (let index = 1; index <= pages; index++) {
      pageList.push(
        <li key={index} className="page-item">
          <button className="page-link"
            onClick={() => {
              setPageIndex(index);
            }}>
            {index}
          </button>
        </li>
      )
    }
    setPages(pageList);
  }

  // Fetch Data From API
  async function fetchproducts(page) {
    setLoading(true)

    // Api For Pagination
    let response = await fetch(import.meta.env.VITE_PRODUCT_API + `?pagination[page]=${page}&pagination[pageSize]=4&populate=*`)
    response = await response.json()
    setproducts(response.data)

    // For Pagination
    if (response.meta.pagination.pageCount > 1) {
      pagination(response.meta.pagination.pageCount)
    }

    setLoading(false)
  }

  // UseEffect For Pagination
  useEffect(() => {
    fetchproducts(pageIndex)
  }, [pageIndex])

  // Page Loading
  if (loading) {
    return (
      <ProductCardPlaceholder />
    )
  }

  return (
    <div>
      <header>
        <section>
          <div className="container-fluid fontSize14">

            <div className="section_title mt-4 ms-3">
              <h2>Recommended <span>Products</span></h2>
            </div>
            <div className="row">
              {
                products && products.slice(0, 4).map(product =>

                  <div className="col-lg-3 col-md-6 col-sm-6 mt-3 mb-2" key={product.id}>
                    <div className="card">
                      <a href="#">

                        <img className="productImageHeight card-img-top rounded-2"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDOWEcwhW7DbI9nkTIUkCtUE2zeAqCghpmjVCJp76CeO8L9YnLH4OWeod3cIaH29Cwnbo&usqp=CAU" />
                      </a>
                      <div className="info-wrap border-top ps-3 p-3">
                        <a href="#" className="title text-muted">{product.attributes.productTitle.substring(0, 35)}</a>

                        <div className="text-muted">
                          <strong className="text-muted">Price: </strong>${product.attributes.productPrice}
                        </div>
                        <div className="text-muted">
                          <strong className="text-muted">Loction: </strong>{product.attributes.location}
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
                          <i className="fa-solid fa-truck-fast"></i> {product.attributes.dilivery}
                        </div>

                        <a
                          target="blank"
                          href="productDetails.html"
                          className="float-end btn btn-dark btn-icon"
                        >
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </div>
                    </div>

                  </div>
                )}

            </div>
            <hr />

            {/* Pagination Start */}
            <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-3">
              <ul className="pagination">
                {/* <li className="page-item disabled">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li> */}
                {
                  pages
                }
                {/* <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li> */}
              </ul>
            </nav>
            {/* Pagination End */}

          </div>
        </section>
      </header>
    </div>
  );
}
export default RecommendedProducts;