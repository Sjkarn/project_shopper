import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { ShopperCategory } from "../shopper-category/shopper-category"
import { ShopperDetails } from "../shopper-details/shopper-details"
import { ShopperHome } from "../shopper-home/shopper-home"
import { ShopperInvalid } from "../shopper-invalid/shopper-invalid"
import { ShopperJewelery } from "../shopper-jewelery/shopper-jewelery"
import { ShopperLogin } from "../shopper-login/shopper-login"
import { ShopperRegister } from "../shopper-register/shopper-register"
import { CrudIndex } from "../../crud-operations/crud-index"
import { CrudCreate } from "../../crud-operations/crud-create"
import { CrudDetails } from "../../crud-operations/crud-details"
import { CrudEdit } from "../../crud-operations/crud-edit"
import "./shopper-index.css"

export function ShopperIndex()
{
    return(
        <div className="container-fluid">
            <BrowserRouter>
              <header className="d-flex p-1 justify-content-between flex-wrap">
                 <div id="logo">
                    <h3 className="bi bi-cart3 d-flex flex-wrap">Shopper</h3>
                 </div>
                 <nav className="d-flex flex-wrap">
                    <div className="me-3"> <Link to="home" className="btn">Home</Link> </div>
                    <div className="me-3"> <Link to="products" className="btn">Products</Link> </div>
                    <div className="me-3"> <Link to="register" className="btn">Register</Link> </div>
                    <div className="me-3"> <Link to="category/men's fashion" className="btn">Men's Fashion</Link> </div>
                    <div className="me-3"> <Link to="category/women's fashion" className="btn">Women's Fashion</Link> </div>
                    <div className="me-3"> <Link to="category/jewelery" className="btn">Jewelery</Link> </div>
                    <div className="me-3"> <Link to="category/electronics" className="btn">Electronics</Link> </div>
                 </nav>
                 <div className="mt-2 d-flex flex-wrap">
                    <span className="bi bi-search me-3"></span>
                    <span className="bi bi-person me-3"></span>
                    <span className="bi bi-heart me-3"></span>
                    <span className="bi bi-cart4 me-3"></span>
                 </div>
              </header>
              <div className="mt-2 bg-dark text-white justify-content-center p-1 d-flex flex-wrap" style={{borderRadius:'12px'}}>
                ⚡️ HAPPY HOLIDAY DEALS ON EVERYTHING ⚡️
              </div>
              <div className="mt-3 d-flex flex-wrap">
                <Routes>
                    <Route path="/" element={<ShopperHome />} />
                    <Route path="home" element={<ShopperHome />} />
                    <Route path="jewelery" element={<ShopperJewelery />} />
                    <Route path="category/:catname" element={<ShopperCategory />} />
                    <Route path="details/:id" element={<ShopperDetails />} />
                    <Route path="register" element={<ShopperRegister />} />
                    <Route path="login" element={<ShopperLogin />} />
                    <Route path="invalid" element={<ShopperInvalid />} />
                    <Route path="products" element={<CrudIndex />} />
                    <Route path="NewProduct" element={<CrudCreate />} />
                    <Route path="cruddetails/:id" element={<CrudDetails />} />
                    <Route path="crudedit/:id" element={<CrudEdit />} />
                </Routes>
              </div>
            </BrowserRouter>
        </div>
    )
}