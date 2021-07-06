import React, { useState ,useEffect  } from 'react'
import {useSelector,useDispatch} from "react-redux"
import useStyles from "./styles"
/*  Material UI  */
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Dialog,DialogTitle,DialogContent,DialogActions,TextField, Grid,Link, Button, InputLabel, FormControl,Select} from '@material-ui/core';
/*  Validators  */
import isEmpty from "validator/lib/isEmpty"
import { showErrorMsg } from "../../helper/showErrorMsg"
import { showSuccessMsg } from "../../helper/showSuccessMsg"
import { Loading } from "../../helper/Loading"
/*  Components  */
import AdminHeader from "./AdminHeader"
/* REACT REDUX */
import {clearMessages} from "../../redux/actions/messageActions"
import { createCategory } from '../../../src/redux/actions/categoryActions';
import { createProduct } from '../../../src/redux/actions/productActions';
import { getProducts } from '../../../src/redux/actions/productActions';
import AllProducts from '../AllProducts/AllProducts';
import {useHistory} from "react-router-dom"
import Description from "../Description/Description"

/*  Main Function  */
const AdminDashboard = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  /**
   REDUX GLOBAL STATE Properties 
   */
   const  {successMsg} = useSelector(state => state.messages)
   const  { loading } = useSelector(state => state.loading)
   const  { categories } = useSelector(state => state.categories)
   const   {products}  = useSelector(state => state.products)

 //  States
  const [openCategory, setOpenCategory] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);


  const [category, setCategory] = useState("");
  const [clientSideErrorMsg,setClientSideErrorMsg] = useState("");


  const [productData,setProductData] = useState({
    productImage : null ,
    productName : "",
    productDescription :"",
    productPrice : "",
    productCategory : "",
    productQty : ""
  })

 //Destructered productData
  const 
  {
  productImage,
  productName,
  productDescription,
  productPrice,
  productCategory,
  productQty
 }  = productData;

 useEffect(() => {
  dispatch(getProducts());
 }, [])




/* API CALL Aciton   */

// const loadCategories =  async()  => {
//     await getCategories()
//         .then((response) => {
//             setCategories(response.data.categories);
//             console.log(response.data.categories)

//         })
//         .catch((err) =>{
//             console.log(err.message);
//         })
// }


/*********************
 * Event Handlers
 * ******************/

  const handleClickOpenCategory = () => {
   
    setOpenCategory(true);
  };
  const handleCloseCategory = () => {
    setOpenCategory(false);
  };
  const handleClickOpenProduct = () => {
 
    setOpenProduct(true);
  };
  const handleCloseProduct = () => {
    setOpenProduct(false);
  };
  
  const handlechangeCategory = (e) => {
 
    setCategory(e.target.value);
  }

  const handleSubmitCategory = (e) => {
    e.preventDefault();
    setCategory("");
    if (isEmpty(category)) {
      setClientSideErrorMsg("Please Enter a Category");
    }
    else {
      const data =  {category} ;
      console.log(successMsg)
      dispatch(createCategory(data));
      
      setClientSideErrorMsg("");
      setCategory('');
    }

  }
  const handleMessages = evt=> {
    dispatch(clearMessages())
  }
  const handleCategoryChange= evt => {
    dispatch(clearMessages());
    setCategory(evt.target.value);
  }
  
  const handleSubmitProduct = (e) => {
    console.log(productName,productQty,productDescription)
    e.preventDefault();
    if (!productImage) {
      setClientSideErrorMsg("Please select an Image ");
    } 
    else if(isEmpty(productName) || isEmpty(productDescription)){
      setClientSideErrorMsg("All Fields are requierd ");
    } else if(isEmpty(productCategory)){
      setClientSideErrorMsg("Please select a Category ");
    } else if(isEmpty(productQty)){
      setClientSideErrorMsg("Please select  the Quantity of the product ");
    } else {
      setClientSideErrorMsg("");      

      // let formData = productData;
      // console.log(productImage)
      let formData = new FormData();

      formData.append('productImage',productImage);
      formData.append('productName',productName);
      formData.append('productDescription',productDescription);
      formData.append('productCategory',productCategory);
      formData.append('productPrice',productPrice);
      formData.append('productQty',productQty);
      
       dispatch(createProduct(formData));   
       setProductData({
          productImage : null ,
          productName : "",
          productDescription :"",
          productPrice : "",
          productCategory : "",
          productQty : ""
        })



    }
  }
  const handleProductChange = (evt) => {
    console.log( evt.target.value)
   setProductData({
     ...productData,
     [evt.target.name] : evt.target.value
   })
  }
  const handleProductImage = (evt) => {
    setProductData({
      ...productData,
      [evt.target.name] : evt.target.files[0]
    })
  }

  const viewOrders = ()  =>{ 
    history.push("/allproducts");
  }

/*
      RENDER FUNCTION
*/
  return (
    <section>
      <CssBaseline />
      <AdminHeader />
      <br />  <br />
      {/* <Description /> */}
      <br />
      <div className={classes.parent}>

        {/* Action Buttons  */}

        <Grid container>
          <Grid item xs={4}>
            <Button className={classes.catbutton} variant="outlined" color="primary" onClick={handleClickOpenCategory}>
              <Typography>
                Add Category
                  </Typography>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button className={classes.catbutton} variant="outlined" color="primary" onClick={handleClickOpenProduct}>
              <Typography>
                Add Food
                  </Typography>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button className={classes.catbutton} variant="outlined" color="primary" onClick={viewOrders}>
              <Typography>
                View Orders
              </Typography>
            </Button>
          </Grid>
        </Grid>
    
         {/* Add Category Dialog */}

        <Dialog open={openCategory} onClose={handleCloseCategory} aria-labelledby="form-dialog-title" fullWidth>
          <DialogTitle id="form-dialog-title" className={classes.TitleItem}>Add category</DialogTitle>

          <form onSubmit={handleSubmitCategory} >
            {clientSideErrorMsg && showErrorMsg(clientSideErrorMsg)}
              
            {successMsg && showSuccessMsg(successMsg)}
            {
              loading ? (
                Loading()
              ) : (
                <DialogContent >
                  <Typography variant="h6" >Category :  {category}</Typography>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Category Name"
                    type="name"
                    value={category}
                    fullWidth
                    variant="outlined"
                    onChange={(e) => handlechangeCategory(e)}
                  />

                </DialogContent>
              )
            }
            <DialogActions>
              <Button onClick={handleCloseCategory} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Submit
              </Button>

            </DialogActions>
          </form>
        </Dialog>

          {/* Add Food Dialogue */}

        <Dialog open={openProduct} onClose={handleCloseProduct} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title" className={classes.TitleItem}>Add Product</DialogTitle>

          {/* Form */}

          <form onSubmit={handleSubmitProduct}>
            {clientSideErrorMsg && showErrorMsg(clientSideErrorMsg)}
        
            {successMsg && showSuccessMsg(successMsg)}
            {
              loading ? (
                Loading()
              ) : (
                <DialogContent >
                  <Typography variant="h6">Product Details :</Typography>
                  <br />
                  <span className={classes.span}>Choose Product </span> 
                  <input className={classes.inputFile} onChange={handleProductImage}  name="productImage" type="file" />
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
                    onChange={handleProductChange}
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
                    onChange={handleProductChange}
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
                    onChange={handleProductChange}
                    fullWidth
                  />

                  <FormControl variant="outlined" className={classes.formControl} halfWidth>
                    <InputLabel htmlFor="outlined-age-native-simple">Select Category</InputLabel>
                    <Select 
                      native
                      placeholder = "Selct Category"
                      name="productCategory"
                      value={productCategory}
                      onChange={handleProductChange}
                     
                    >
                      <option value="">Choose a Category</option>


                      {categories && 
                          categories.map((cat) => (
                            <option
                              key={cat._id}
                              value={cat._id}
                            >
                             {cat.category}
                            </option>
                      ))}
                    </Select>
                  </FormControl>


                <TextField
                autoFocus
                type="number"  
                variant="outlined"
                margin="dense"
                placeholder="Quantity"
                name="productQty"
                onChange={handleProductChange}
                value={productQty}
                fullWidth
                />
                <hr style={{borderWidth : "0px"}}/>
                <hr style={{borderWidth : "0px"}}/>

                </DialogContent>
              )
            }

            <DialogActions>
              <Button onClick={handleCloseProduct} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
      <div>

    
        {/* <Button color="primary" onClick={getAllProducts} >Get ALL PRODUCTS </Button> */}
      <Button  variant="outlined" color="primary" onClick={viewOrders}>
              <Typography >
                View Orders
              </Typography>
            </Button>
      
      <br />
      <br />

      </div>
      <br />

    </section>
  )
}

export default AdminDashboard
