import { Link, useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import { useEffect } from "react"

export function ShopperHome()
{
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();

    useEffect(()=>{
        if(cookies["userid"]===undefined){
            navigate("/login");
        }
    },);
    function SignoutClick(){
        removeCookie("userid");
        navigate("/login");
    }
    return (
        <div className="container-fluid d-flex justify-content-between">
            <div>
            <div className="d-flex justify-content-between flex-wrap">
                <div className="card m-3 p-2" style={{width:'250',boxShadow:'2px 2px 2px 2px gray'}}>
                    <Link to="/category/electronics"><img src="electronics.jpg" style={{width:'200px', height:'250px'}} alt=""/></Link>
                    <div className="d-flex justify-content-center">
                        <Link to="/category/electronics"><button className="btn btn-danger mt-3" style={{width:'200px'}}>Electronics</button></Link>
                    </div>
                </div>
                <div className="card m-3 p-2" style={{width:'250',boxShadow:'2px 2px 2px 2px gray'}}>
                    <Link to="/category/men's fashion"><img src="mens.jpg"  style={{width:'200px', height:'250px'}} alt=""/></Link>
                    <div className="d-flex justify-content-center">
                        <Link to="/category/men's fashion"><button className="btn btn-danger mt-3" style={{width:'200px'}}>Men's Fashion</button></Link>
                    </div>
                </div>
                <div className="card m-3 p-2" style={{width:'250',boxShadow:'2px 2px 2px 2px gray'}}>
                    <Link to="/category/women's fashion"><img src="women.jpg"  style={{width:'200px', height:'250px'}} alt=""/></Link>
                    <div className="d-flex justify-content-center">
                        <Link to="/category/women's fashion"><button className="btn btn-danger mt-3" style={{width:'200px'}}>Women's Fashion</button></Link>
                    </div>
                </div>
                <div className="card m-3 p-2" style={{width:'250',boxShadow:'2px 2px 2px 2px gray'}}>
                    <Link to="/category/jewelery"><img src="jewelery.jpg"  style={{width:'200px', height:'250px'}} alt=""/></Link>
                    <div className="d-flex justify-content-center">
                        <Link to="/category/jewelery"><button className="btn btn-danger mt-3" style={{width:'200px'}}>Jewelery</button></Link>
                    </div>
                </div>
            </div>
            </div>
            <div>
                <h4 style={{fontFamily:"cursive", fontWeight:"bold"}}>Hello ! - {cookies["userid"]}</h4>
                <button onClick={SignoutClick} className="btn btn-outline-danger mt-2">Signout</button>
            </div>
        </div>
    )
}