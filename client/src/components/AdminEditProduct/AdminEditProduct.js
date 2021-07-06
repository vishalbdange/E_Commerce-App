import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from "react-router-dom"
import {Dialog,DialogTitle,DialogContent,DialogActions,Typography,TextField, Grid, Button, InputLabel, FormControl,Select} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useDispatch, useSelector } from "react-redux"
import Product from '../AllProducts/Product';
import { getProduct, getProducts } from "../../redux/actions/productActions"
import { getCategories } from "../../redux/actions/categoryActions"
import { showErrorMsg } from "../../helper/showErrorMsg"
import { showSuccessMsg } from "../../helper/showSuccessMsg"
import { Loading } from "../../helper/Loading"


import axios from "axios"
const AdminEditProduct = ({match,history}) => {

    /*****
     * PARAMS 
     */
    // const productId = useParams();

    /*****
     * Component State Properties 
     */
     const dispatch = useDispatch();
     const { product } = useSelector(state => state.products);
     const { categories } = useSelector(state => state.categories);
    const productId = match.params.productId;
    const [productImage, setProductImage] = useState(null);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productQty, setProductQty] = useState('');

    // console.log(productId)



    
    useEffect(() => {

        if (!product) {
            dispatch(getProduct(productId))
            dispatch(getCategories())

        } else {
            console.log(productImage)
            setProductImage(product.productImage);
            setProductName(product.productName);
            setProductDescription(product.productDescription);
            setProductPrice(product.productPrice);
            setProductCategory(product.productCategory);
            setProductQty(product.productQty);
        }
    }, [dispatch, productId, product])
/*****
 * Event Handlers 
 * ****** */

const handleProductImage = (e) => {
     
    const image = e.target.files[0];

    console.log(image)
    if(image != null){
        setProductImage(image);
    }

   
}


const handleProductSubmit = async e => {
    
    e.preventDefault();
    //prepare our data
    console.log(productImage)
    const formData = new FormData();
    formData.append('productImage', productImage);
    formData.append('productName', productName);
    formData.append('productDescription', productDescription);
    formData.append('productPrice', productPrice);
    formData.append('productCategory', productCategory);
    formData.append('productQty', productQty);
 
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };
   

    console.log("In Handle Submit");
    await axios.put(`/api/product/${productId}`, formData, config)
        .then(res => {
            // console.log("Inside PUT Request")
            history.push('/admin/dashboard');
            
             
        })
        .catch(err => {
            console.log(err.message);
        });

}




    return (
        <div>
            <Link to="/admin/dashboard" style={{float: "left"}}>
            <ArrowBackIcon>
                Go Back
            </ArrowBackIcon>
                
            </Link>
            <form onSubmit={handleProductSubmit}>

                        <>
                            <Typography variant="h6">Update Product</Typography>
                            <br />
                            {/* <span>Choose Product </span> */}
                            <input   onChange={handleProductImage}  accept="images/*"  type="file" />
                            {
                                productImage && 
                                productImage.name ? (
                                    <span>
                                        {productImage.name}
                                    </span>
                                ) : productImage ? (
                                    <img
                                    style={{
                                        width:"120px",
                                        height:"90px"
                                    }}
                                    src={`/uploads/${productImage}`}
                                    alt="Product"
                                    />
                                ) : null
                                
                            }

                            <br />
                            <br />
                            <TextField
                                autoFocus
                                type="name"
                                margin="dense"
                                name="productName"
                                value={productName}
                                placeholder="Type Name"
                                variant="outlined"
                                onChange={(e) => {
                                    setProductName(e.target.value)
                                }}
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                placeholder=" Write Description"
                                name="productDescription"
                                value={productDescription}
                                multiline="true"
                                rows="4"
                                variant="outlined"
                                onChange={(e) => {
                                    setProductDescription(e.target.value)
                                }}
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                type="price"
                                margin="dense"
                                placeholder="Write Price"
                                name="productPrice"
                                value={productPrice}
                                variant="outlined"
                                onChange={(e) => {
                                    setProductPrice(e.target.value)
                                }}
                                fullWidth
                            />

                            <FormControl variant="outlined"  halfWidth>
                                <Select
                                    native
                                    placeholder="Selct Category"
                                    name="productCategory"
                                    value={productCategory}
                                    onChange={(e) => {
                                        setProductCategory(e.target.value)
                                    }}

                                >
                                 


                                    {
                                    !categories ? 
                                        (<option value="">Choose a Category</option>)
                                    :
                                        categories.map((cat) => (
                                            <option
                                                key={cat._id}
                                                value={cat._id}
                                            >
                                                {cat.category}
                                            </option>
                                        ))
                                    }
                                </Select>
                            </FormControl>


                            <TextField
                                autoFocus
                                type="number"
                                variant="outlined"
                                margin="dense"
                                placeholder="Quantity"
                                name="productQty"
                                onChange={(e) => {
                                    setProductQty(e.target.value)
                                }}
                                value={productQty}
                                fullWidth
                            />
                            <hr style={{ borderWidth: "0px" }} />
                            <hr style={{ borderWidth: "0px" }} />

                        </>
                <Button color="primary">
                    Cancel
                </Button>
                <Button type="submit" color="primary" >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default AdminEditProduct
