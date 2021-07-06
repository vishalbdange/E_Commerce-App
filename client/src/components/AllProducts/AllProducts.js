import React from 'react'
import useStyles from "./styles"
import {useSelector} from "react-redux"
import {Grid,Paper, Typography} from "@material-ui/core"
import {red} from "@material-ui/core/colors"
import Product from './Product'

const AllProducts = () => {
    
    const classes = useStyles();
    const products = useSelector(state => state.products.products)
    console.log(products)
    console.log("products")
    return (
        <>
        <Typography variant="h4" style=
        {{
            textAlign:"center",
            marginTop:"14px",backgroundColor:red[500],
            borderRadius:"10px",
            boxShadow:"1px 1px 4px 1px grey",
            margin:"0px 80px"
        }}
        >Your Orders</Typography>
        <Grid 
            container 
            className={classes.container}
            spacing={12}      
        >
                {products?.map(prod =>{
                    return (
                    <Grid
                    item
                    xs={12} 
                    sm={6}
                    lg={3}
                    className={classes.grid}
                    >
                       <Product  product={prod} />
                    </Grid>
                    );
                })}
           
        </Grid>
        </>
    )
}

export default AllProducts
