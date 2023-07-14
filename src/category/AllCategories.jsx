import { useState, useEffect } from 'react'


function SubCategories() {
  let [categories, setCategories] = useState([])
  let [loading, setLoading] = useState(false)

  // Fetch data From API
  async function fetchCategories() {
    setLoading(true)
    try {
      let response = await fetch(import.meta.env.VITE_SUB_CATEGORY_API)
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
  if (loading && categories == null) {
    return (
      <div class="col-md-6 mx-auto">
        <h1>Loading...</h1>
      </div>
    )
  }


  return (

    <div className="row my-4">

      {
        categories.map(category =>
          <div className="col-md-6 col-lg-3 mb-3 mb-lg-0" key={category.id}>

            <div className="list-group list-group-flush" >
              <p className=" text-uppercase fw-bold text-dark mt-1">
                {category.attributes.SubCategory}
              </p>

              <a href="#" className="  text-secondary">{category.attributes.SubCategory}</a>

            </div>
          </div>
        )
      }
    </div>

  );
}
export default SubCategories