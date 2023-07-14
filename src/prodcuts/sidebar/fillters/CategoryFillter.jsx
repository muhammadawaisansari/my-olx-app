import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FilterPlaceholder from '../../../placeholders/FillterPlaceholder'
function CategoryFillter() {
    let [categories, setcategories] = useState([])
    let [loading, setLoading] = useState(false)
    // Fetch Data From API
    async function fetchcategories(page) {
        setLoading(true)

        // Api For Pagination
        let response = await fetch('http://localhost:1337/api/categories?pagination[page]=1&pagination[pageSize]=10&populate=*')

        response = await response.json()
        setcategories(response.data)
        setLoading(false)
    }
    // UseEffect For Pagination
    useEffect(() => {
        fetchcategories()
    }, [])

    // Page Loading
    if (loading) {
        return (
            <FilterPlaceholder />
        )
    }
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button text-dark bg-light"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                    >
                        Related Items
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                    <div className="accordion-body">
                        {
                            categories.map(category =>
                                <ul className="list-unstyled" key={category.id}>

                                    <li><Link to="#" className="text-dark">{category.attributes.categoryTitle} </Link></li>


                                </ul>
                            )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default CategoryFillter;