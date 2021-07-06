import React,{useState} from 'react'
import useStyles from "./styles.js"
import {Card,CardMedia,CardHeader,CardContent,CardActions,Collapse,Avatar,IconButton,Typography,Button} from "@material-ui/core"
import {Link} from "react-router-dom"
import {FavoriteIcon,ShareIcon,MoreVertIcon} from '@material-ui/icons';

import {useDispatch} from "react-redux";
import {deleteProduct} from  "../../redux/actions/productActions"
import {editProduct} from  "../../redux/actions/productActions"
const Product = ({product}) => {
    console.log(product)  
    const dispatch = useDispatch();
    const classes = useStyles();
    console.log("Product")
    console.log(product)  
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const deleteProd = () => {
      dispatch(deleteProduct(product._id))
      
      console.log("Delete Prod Dispatchedd")
    }

    const editProd = () => {
      // dispatch(editProduct(product._id))
      
      
      console.log("Edit Prod Dispatchedd")
    }
    return (
        <>
            {/* <Card className={classes.card}>
            <CardMedia
                className={classes.image}
                src="image"
                image={`/uploads/${product.productImage}`}
              />
                    <p><span> Name : {product.productName}</span> </p>
                    <p><span> Price :  {product.productPrice}</span></p>
                    <p><span> Quantity :{product.productQty} </span></p>
                    <p><span> Description : {product.productDescription}</span> </p>
                    <p><span> Category :{product.productCategory?.category}</span></p>
            </Card> */}
            <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {product.productName[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* Icon here */}
          </IconButton>
        }
        title={product.productName}
        subheader={`${product.productPrice} ₹`}
      />
      <CardMedia
        className={classes.media}
        image={`/uploads/${product.productImage}`}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">    
            {product.productDescription.length > 30 ? product.productDescription.substring(0,30) + "..." :   product.productDescription.substring(0,30)}
        </Typography>
      </CardContent>
      <CardContent>
          <Typography>
              <Typography variant="body">Qty : {product.productQty} </Typography>
              <Typography variant="body" style={{float : "right"}}>Category : {product.productCategory.category ? product.productCategory.category : "Your category"} </Typography>
          </Typography>
      </CardContent>
      <CardContent>
        <Link to={`/admin/edit/product/${product._id}`}>
          <Button onClick={editProd}>    
              Edit
          </Button>
        </Link>

        {/* style={{float: "right"}} onClick={dispatch(deleteProduct(product._id))} */}
        <Button onClick={deleteProd}>    
            Delete
        </Button>
      </CardContent>
    
    </Card>
    </>
    



    )
}

export default Product
