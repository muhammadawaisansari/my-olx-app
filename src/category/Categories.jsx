import { useState, useEffect } from 'react'
import CategoryCard from './CategoryCard'
import CategoryPlaceholder from '../placeholders/CategoryPlaceholder'

function Categories() {
    let [categories, setCategories] = useState([])
    let [loading, setLoading] = useState(false)

    // Fetch data From API
    async function fetchCategories() {
        setLoading(true)
        try {
            let response = await fetch(import.meta.env.VITE_CATEGORY_API + '?pagination[page]=1&pagination[pageSize]=12&populate=*')
            response = await response.json()
            setCategories(response.data)
        }
        catch (error) {

        }
        finally {
            setLoading(false)
        }
    }

    // Use Effect Hook
    useEffect(() => {
        fetchCategories()
    }, [])

    // Page Loading
    if (loading) {
        return (
            <CategoryPlaceholder />
        )
    }
    return (
        <>
            <section>
                <div className="container-fluid fontSize14">
                    <div className="section_title mt-1 ms-3">
                        <h2>Top sixten <span>Categories</span></h2>
                    </div>

                    <div className="row gy-4">
                        {
                            (categories.length > 0) ? categories.map(category => <CategoryCard props={category} />) :

                                (
                                    <>
                                        <div style={{ minHeight: "350" }} className='container-fluid d-flex justify-content-center col-12 '>
                                            <h4 className='mt-5 mb-5'>No Category are Available.</h4>

                                        </div>
                                    </>
                                )
                        }
                    </div>

                </div>
            </section>
        </>
    );
}
export default Categories;