let CategoryCard = (props) => {

    let category = props.props;
    let image = import.meta.env.VITE_BASE_URL + category.attributes.categoryThumbnail.data.attributes.url;
    return (
        <>
            <div className='col-lg-1 col-md-3 col-sm-4 col-6'>
                <a href="#" key={category.id} className="text-center d-flex flex-column justify-content-center">
                    <img className="img-fluid Categoryimg mx-auto p-2"
                        src={image}
                        alt={category.attributes.categoryTitle} />
                    <div className="text-muted">{category.attributes.categoryTitle.substring(0, 15)}</div>
                </a>
            </div>
        </>
    )
}

export default CategoryCard