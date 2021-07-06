import React from 'react'
import {Typography,Container,Grid} from '@material-ui/core';
import useStyles from "./styles"
import header from "./header.svg"

const AdminHeader = () => {
    const classes = useStyles();
    return (
        <>
        <Container 
        style=
        {{
            display:"flex",
            justifyContent:"center",
           
            marginTop : "40px",
            paddingRight:"20px"
            
        
        }}
        
        
        >
            <Grid container xs={12}>
                <Grid item xs={6}>
                <Typography 
                variant="h2" 
                component="h2" 
                style=
                {{
                    textAlign:"center",
                    width:"100%",
                    padding:"10px",
                    boxShadow :"1px 5px 20px grey",
                    marginTop : "200px"
                }}>Welcome to Foodify</Typography>
                </Grid>
                <Grid item xs={6}>
                    <img 
                        src={header} 
                        style={{
                            width:"900px",
                            height:"400px",
                            margin : "60px 100px 10px 0px"

                        }}
                        alt="Hero img"
                        />
                </Grid>
            </Grid>
      
        
        </Container>

        </>
    )
}

export default AdminHeader





