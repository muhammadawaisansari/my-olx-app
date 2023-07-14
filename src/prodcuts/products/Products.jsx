import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';
import ProductCardPlaceholder from '../../placeholders/ProductCardPlaceholder';
import ServerDown from '../../errors/ServerDown';

function Products() {
  let [products, setproducts] = useState([])
  let [loading, setLoading] = useState(false)

  // If server Down
  let [error, setError] = useState(null)

  // Fetch Data From API
  async function fetchproduct(page) {
    setLoading(true)
    try {
      let response = await fetch(import.meta.env.VITE_PRODUCT_API + `?pagination[page]=1&pagination[pageSize]=8&populate=*`)
      response = await response.json()
      setproducts(response.data)
    }
    catch (error) {
      setError(error)
    }
    finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    fetchproduct()
  }, [])

  // Page Loading
  if (loading) {
    return (
      <ProductCardPlaceholder />
    )
  }


  // If server Down
  if (error !== null) {
    return (
      <ServerDown />
      )
  }



  return (
    <div>
      <header>
        {/* Recommended Section Start */}
        <section>
          <div className="container-fluid fontSize14">


            <div className="section_title mt-4 ms-3">
              <h2>All <span>Products</span></h2>
            </div>
            <div className="row">
              {
                (products.length > 0) ? products.map(product => <ProductCard props={product} />) :

                  (
                    <>
                      <div style={{ minHeight: "350" }} className='container-fluid d-flex justify-content-center col-12 '>
                        <h4 className='mt-5 mb-5'>No Products are Available.</h4>

                      </div>
                    </>
                  )
              }

            </div>
          </div>
        </section>
        {/* Recommended Section End */}
      </header>
    </div>
  );
}
export default Products;