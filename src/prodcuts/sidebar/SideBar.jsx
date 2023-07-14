import CategoryFillter from './fillters/CategoryFillter'
import BrandFillter from './fillters/BrandFillter'
import SizeFillter from './fillters/SizeFillter'
import PriceFiller from './fillters/PriceFiller'
import SidbarProduct from './sidbarProducts'
function SideBar() {


  // Front End
  return (
    <div className="fontSize14">

      <section className="mt-5">
        <div className="container">
          <div className="row">

            <div className="col-lg-3">
              <button
                className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>Show filter</span>
              </button>

              <div className="collapse card d-lg-block mb-5" id="navbarSupportedContent">
                <div className="accordion" id="accordionPanelsStayOpenExample">

                  <CategoryFillter />

                  <BrandFillter />

                  <PriceFiller />

                  <SizeFillter />

                </div>
              </div>
            </div>

            <div className="col-lg-9">

              <SidbarProduct />

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default SideBar;