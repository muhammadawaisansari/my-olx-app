import { useState, useEffect } from 'react'
import SidbarProductCard from './SidebarCard'
import SidBarProductPlaceholder from '../../placeholders/SidebarProductPlaceholder'
function SidbarProduct() {

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
        let response = await fetch(`http://localhost:1337/api/products?pagination[page]=${page}&pagination[pageSize]=6&populate=*`)
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

    if (loading) {
        return (
            <>
                <SidBarProductPlaceholder />
            </>
        );
    }
    return (
        <>
            {/* Get Data and pas the SidebarProductCard */}
            <div className="row">

                {
                    (products.length > 0) ? products.map(sideproduct => <SidbarProductCard props={sideproduct} />) :
                        (
                            <>
                                <div style={{ minHeight: "350" }} className='container d-flex justify-content-center'>
                                    <h1>No Products are Available.</h1>

                                </div>
                            </>
                        )
                }

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

        </>
    );
}
export default SidbarProduct