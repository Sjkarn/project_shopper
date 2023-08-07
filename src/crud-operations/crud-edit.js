import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export function CrudEdit() {
    const params = useParams();
    const [products, setProducts] = useState([{ProductId:0, Name:'', Price:0, Stock:false}]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios({
            method:'get',
            url:`http://127.0.0.1:8080/details/${params.id}`
        })
        .then(response=>{
            setProducts(response.data);
        })
    },[]);
    
    
    return(
        <div className="m-auto">
            <h2 className="bi bi-pen">Edit Product</h2>
            <Formik initialValues={
                {
                    ProductId: 0,
                    Name: '',
                    Price: 0,
                    Stock: false
                }
            }
            onSubmit={
                (values)=>{
                    axios({
                        method:'put',
                        url: 'http://127.0.0.1:8080/updateproduct',
                        data : values
                    }).then(()=>{
                        alert("Product Updated");
                        navigate("/home");
                    }                        
                    )
                }
              }
            >
                {
                    <Form>
                        <dl>
                            <dt>Name</dt>
                            <dd>
                                <Field type="text" name="Name" value={products[0].Name}></Field>
                            </dd>
                            <dt>Price</dt>
                            <dd>
                                <Field type="text" name="Price" value={products[0].Price}></Field>
                            </dd>
                            <dt>Stock</dt>
                            <dd>
                                <Field type="checkbox" name="Stock" checked={products[0].Stock}></Field>
                            </dd>
                        </dl>
                        <button className="btn btn-success">Save</button>
                        <div>
                            <Link to='/products'>Back to Products</Link>
                        </div>
                    </Form>
                }
            </Formik>
        </div>
    )
}    