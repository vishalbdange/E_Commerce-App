import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from "./styles"



const AdminDashboard = () => {
    const classes = useStyles();
    return (
    <>
      <CssBaseline />
      <div className={classes.parent}>  
            <Typography className={classes.header}>DashBoard</Typography>       
      </div>

    </>
    )
}

export default AdminDashboard
